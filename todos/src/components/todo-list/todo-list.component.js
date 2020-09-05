import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => <h5 key={todo.id}>{todo.text}</h5>);
  }
}

export default TodoList;
