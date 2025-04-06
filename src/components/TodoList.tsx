import React from 'react';
import { deleteTodo, updateTodo, resetDailyTodos } from '../api.ts';
import './TodoList.css';

export default function TodoList({ todos, onDelete }: { todos: any[], onDelete: () => void }) {
  const handleDelete = (id: number) => {
    deleteTodo(id).then(onDelete);
  };

  const handleToggleDone = (id: number, done: boolean) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        updateTodo(id, { title: todo.title, done, daily: todo.daily }).then(onDelete);
    }
  };

  const handleResetDaily = () => {
    resetDailyTodos().then(() => onDelete());
  };

  return (
    <div className="todo-list">
      <button className="reset-daily-button" onClick={handleResetDaily}>Reset Daily</button>
      <h1>Mes Todos</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleDone(todo.id, !todo.done)}
            />
            <span className="todo-title">
              {todo.title}
            </span>
            {todo.daily && <span className="daily-icon" title="Daily">📅</span>}
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
