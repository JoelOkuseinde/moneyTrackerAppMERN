const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/transaction');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction', async (req, res) => {
    try {
        const {name, description, datetime, price} = req.body;
        const transaction = await Transaction.create({name, description, datetime, price});
        res.json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
