import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        text: input,
        priority: priority,
      });
      setInput('');
      setPriority('Low');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
