import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Import the Button component from React Bootstrap

function Todo({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newStatus, setNewStatus] = useState(todo.status);

  const handleUpdate = () => {
    onUpdate(todo.id, newTaskName, newDescription, newStatus);
    setIsEditing(false);
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <span
            onClick={() => setIsEditing(true)}
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
          >
            {todo.status}
          </span>
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>{' '}
          <Button variant="danger" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </>
      )}
    </div>
  );
}

export default Todo;
