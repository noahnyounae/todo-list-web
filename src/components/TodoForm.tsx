import { useState } from 'react';
import { createTodo } from '../api.ts';
import React from 'react';
import './TodoForm.css';

export default function TodoForm({ onTodoAdded }: { onTodoAdded: () => void }) {
  const [title, setTitle] = useState('');
  const [done, setDone] = useState(false);
  const [daily, setDaily] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo({ title, done, daily }).then(() => {
      setTitle('');
      setDone(false);
      setDaily(false);
      onTodoAdded();
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Ajouter un todo"
      />
      <label className="todo-checkbox-label">
        <input
          type="checkbox"
          checked={done}
          onChange={e => setDone(e.target.checked)}
        />
        Fait
      </label>
      <label className="todo-checkbox-label">
        <input
          type="checkbox"
          checked={daily}
          onChange={e => setDaily(e.target.checked)}
        />
        Daily
      </label>
      <button className="add-button" type="submit">Ajouter</button>
    </form>
  );
}
