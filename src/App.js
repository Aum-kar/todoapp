import './App.css';
import { useState } from 'react';
import Todoitem from './Todoitem';
import Checkedtodoitem from './Checkedtodoitem';

function App() {
  const [todoitem, setTodoitem] = useState('');
  const [todoarray, setTodoarray] = useState([]);
  const [completedtodoarray, setCompletedtodoarray] = useState([]);

  function addTodo() {
    setTodoarray((item) => {
      return [todoitem, ...item]
    });
    setTodoitem('');
  }

  function moveToCompleted(id) {
    setCompletedtodoarray((olditems) => {
      return [todoarray[id], ...olditems]
    });

    setTodoarray(todoarray.filter((element, index) => {
      return index !== id;
    }));
  }

  function moveToIncomplete(id) {
    setTodoarray((olditems) => {
      return [completedtodoarray[id], ...olditems]
    })

    setCompletedtodoarray(completedtodoarray.filter((element, index) => {
      return index !== id;
    }));
  }
  
  function deleteItemFromIncomplete(id) {
    setTodoarray((oldarray) => {
      return oldarray.filter((element, index) => {
        return index !== id;
      })
    })
  }

  function deleteItemFromCompleted(id) {
    setCompletedtodoarray(
      completedtodoarray.filter((element, index) => {
        return index !== id;
    }))
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='main-body'>

        <div className='input-fields'>
          <input type='text'
            value={todoitem}
            onChange={(e) => setTodoitem(e.target.value)}
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
                onSelect={deleteItemFromIncomplete}
                onCheck={moveToCompleted}
              />)
            })
          }
        </div>

        <hr />

        <div className='completedtodobox'>
          <span>Completed todos</span>
          {
            completedtodoarray.map((element, index) => {
              return <Checkedtodoitem
                key={index}
                id={index}
                element={element}
                onSelect={deleteItemFromCompleted}
                onCheck={moveToIncomplete} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
