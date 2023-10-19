import './App.css';
import {useState} from "react";

function App() {
  const [name,setName] = useState('')
  const [datetime, setDatetime] = useState('')
  const [description, setDescription] = useState('')
  function addNewTransaction(ev) {
    ev.preventDefault();

    if (!name || !description || !datetime) {
      console.error('Invalid data: Name, description, and datetime are required.');
      return;
    }

    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch (url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime
      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json)
      }).catch(error => {
        console.error('Error:', error); })
    })
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
        <input type="text"
        value={name}
        onChange={ev => setName(ev.target.value)}
        placeholder={'+110 Jordan Trainers'}/>
        <input type="datetime-local"
        value={datetime}
        onChange={ev => setDatetime(ev.target.value)}/>
        </div>
        <div className="description">
        <input type="text"
        value={description}
        onChange={ev => setDescription(ev.target.value)}
        placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Jordans</div>
            <div className="description">These look wavy. I had to cop</div>
          </div>
          <div className="right">
            <div className="price">£110</div>
            <div className="datetime">2023-10-18</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Jordans</div>
            <div className="description">These look wavy. I had to cop</div>
          </div>
          <div className="right">
            <div className="price red">-£110</div>
            <div className="datetime">2023-10-18</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Depop Sale</div>
            <div className="description">Sold a broken hearts hoodie</div>
          </div>
          <div className="right">
            <div className="price green">+£110</div>
            <div className="datetime">2023-10-18</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
