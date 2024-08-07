import React from 'react';

function Card({ todos, handleStatusChange, handleEdit, handleDelete }) {
  return (
    <div className="todo-container">
  {filteredTodos.map(todo => (
    <div key={todo.id} className="todo-card">
      <div className="todo-info">
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="todo-actions">
        <select value={todo.status} onChange={(e) => handleStatusChange(todo.id, e.target.value)}>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={() => handleEdit(todo.id)} className="edit-btn">Edit</button>
        <button onClick={() => handleDelete(todo.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  ))}
</div>

  );
}

export default Card;
