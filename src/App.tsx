import { useEffect, useState } from 'react';
import TodoList from './components/TodoList.tsx';
import TodoForm from './components/TodoForm.tsx';
import { getTodos } from './api.ts';
import React from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    getTodos().then(res => setTodos(res.data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <TodoForm onTodoAdded={fetchTodos} />
      <TodoList todos={todos} onDelete={fetchTodos} />
    </div>
  );
}

export default App;
