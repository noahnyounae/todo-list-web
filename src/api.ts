import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos'; // à adapter

export const getTodos = () =>
  axios.get(API_URL).catch((error) => {
    console.error('Erreur lors de la récupération des todos:', error.message);
    throw error;
  });

export const createTodo = (todo: { title: string; done: boolean }) =>
  axios.post(API_URL, todo).catch((error) => {
    console.error('Erreur lors de la création du todo:', error.message);
    throw error;
  });

export const updateTodo = (id: number, todo: { title: string; done: boolean }) =>
  axios.put(`${API_URL}/${id}`, todo).catch((error) => {
    console.error('Erreur lors de la mise à jour du todo:', error.message);
    throw error;
  });

export const deleteTodo = (id: number) =>
  axios.delete(`${API_URL}/${id}`).catch((error) => {
    console.error('Erreur lors de la suppression du todo:', error.message);
    throw error;
  });
