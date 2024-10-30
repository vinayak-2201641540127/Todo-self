import React, { useState } from "react";
import TodoForm from './Components/TodoForm.js';
import TodoList from './Components/TodoList.js';

const App = () =>{
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) =>{
    const newTodos = todos.filter((_, i)=> i!==index);
    setTodos(newTodos);
  };

  return(
    <>
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
    </>
  );
};
export default App;
