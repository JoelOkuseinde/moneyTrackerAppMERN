
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
        <input tpye="text" placeholder={'+110 Jordan Trainers'}/>
        <input type="datetime-local"/>
        </div>
        <div className="description">
        <input type="text" placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>

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
          <div className="price">£110</div>
          <div className="datetime">2023-10-18</div>
        </div>
      </div>
      
    </main>
  );
}

export default App;
