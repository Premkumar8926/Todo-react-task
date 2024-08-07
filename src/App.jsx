import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, description) => {
    const newTodo = {
      id: Date.now(),
      name,
      description,
      status: 'not completed',
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, name, description, status) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name, description, status } : todo
      )
    );
  };

  const handleStatusChange = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
}

export default App;
