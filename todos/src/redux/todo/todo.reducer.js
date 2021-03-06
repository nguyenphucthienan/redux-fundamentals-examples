const { default: TodoActionTypes } = require('./todo.types');

const INITIAL_STATE = [
  { id: '7vxk4bf9tq', text: 'Learn React', isDone: true },
  { id: 'fne1qc2nlo', text: 'Learn Redux', isDone: false }
];
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];
    case TodoActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TodoActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
