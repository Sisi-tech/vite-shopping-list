import { useState } from 'react';
import './App.css';

const items = [
  {id: 1, name: 'Beef'},
  {id: 2, name: 'Egg'},
  {id: 3, name: 'Fish'},
  {id: 4, name: 'Cabbage'},
]

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newItem = {id: fakeId, name};
    const updatedList = [...list, newItem];
    setList(updatedList);
    setName('');
  }
  const removeItem = (id) => {
    const updatedList = list.filter((item)=> item.id !== id);
    setList(updatedList);
  }

  return (
    <div className='main'>
      <div className='form-container'>
        <h2>Shopping List</h2>
        <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Item name</label>
        <input 
        value={name}
        id="name"
        onChange={(e)=>setName(e.target.value)}
        />
        <button 
        className='btn submit-btn'
        >
        Submit
        </button>
        </form>
      </div>
      <h2>All Items</h2>
      {list.map((item)=> {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button 
            className='btn'
            onClick={()=>removeItem(item.id)}
            >Remove</button>
        </div>
        );
      })}
    </div>
  );
}

export default App
