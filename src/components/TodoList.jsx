import React, { useState } from 'react';
import Todo from './Todo';

function TodoList({ todos, onDelete, onUpdate }) {
  const [filter, setFilter] = useState('both');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'both') return true;
    return todo.status === filter;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button
          className="filter-button"
          onClick={() => setFilter('both')}
        >
          All
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('not completed')}
        >
          Not Completed
        </button>
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
