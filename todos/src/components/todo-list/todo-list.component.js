import React, { Component } from 'react';
import { Collection, CollectionItem } from 'react-materialize';

import TodoItem from '../todo-item/todo-item.component';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <Collection className='z-depth-1'>
        {todos && todos.length > 0 ? (
          todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <CollectionItem>
            Try adding some tasks to see them here.
          </CollectionItem>
        )}
      </Collection>
    );
  }
}

export default TodoList;
