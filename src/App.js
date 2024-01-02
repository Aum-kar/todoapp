import './App.css';
import { useState } from 'react';
import Todoitem from './Todoitem';

function App() {
  const [todoitem, setTodoitem] = useState('');
  const [todoarray, setTodoarray] = useState([]);

  function addTodo() {
    setTodoarray((item) => {
      return [todoitem, ...item]
    });
    setTodoitem('');
  }

  function deleteItem(id) {
    setTodoarray((oldarray) => {
      return oldarray.filter((arrelement, i) => {
        return i !== id;
      })
    })
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='main-body'>

        <div className='input-fields'>
          <input type='text'
            value={todoitem}
            onChange={(e)=>setTodoitem(e.target.value)}
            placeholder='Write todo here' />
          <button onClick={addTodo}><i className='fa fa-plus'></i></button>
        </div>

        <hr />

        <div className='todolistbox'>
          {
            todoarray.map((item, i) => {
              return (<Todoitem key={i} 
              id={i} 
              element={item} 
              onSelect={deleteItem} 
            />)
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
