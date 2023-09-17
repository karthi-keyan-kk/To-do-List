import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo">
        {todos.map((todo, index) => (
          <div key={index} className='inner'>
            <div><ul><li>{todo}</li><button onClick={() => removeTodo(index)}>Remove</button></ul></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
