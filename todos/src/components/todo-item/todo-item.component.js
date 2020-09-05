import React, { Component } from 'react';
import { CollectionItem, Icon } from 'react-materialize';
import { connect } from 'react-redux';

import './todo-item.styles.scss';

import { deleteTodo, toggleTodo } from '../../redux/todo/todo.actions';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggle() {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo);
  }

  delete() {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo);
  }

  render() {
    const {
      todo: { text, isDone }
    } = this.props;

    return (
      <CollectionItem className='todo-item'>
        <span
          className={`text ${isDone ? 'done-text' : ''}`}
          onClick={this.toggle}
        >
          {text}
        </span>
        <div className='secondary-content'>
          <span onClick={this.delete}>
            <Icon className='remove-button red-text'>remove</Icon>
          </span>
        </div>
      </CollectionItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoItem);
