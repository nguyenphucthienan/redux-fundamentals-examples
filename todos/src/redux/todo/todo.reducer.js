const { default: TodoActionTypes } = require('./todo.types');

const INITIAL_STATE = {
  todos: [
    { id: '7vxk4bf9tq', text: 'Learn React', isDone: false },
    { id: 'fne1qc2nlo', text: 'Learn Redux', isDone: false }
  ]
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default todoReducer;
