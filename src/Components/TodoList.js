import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.text}</span>
          <span> - {todo.priority} Priority</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;