import TodoActionTypes from './todo.types';

export const addTodo = todo => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo
});

export const toggleTodo = todo => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: todo
});

export const deleteTodo = todo => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: todo
});
