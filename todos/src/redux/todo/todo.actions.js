import TodoActionTypes from './todo.types';

export const addTodo = todo => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo
});
