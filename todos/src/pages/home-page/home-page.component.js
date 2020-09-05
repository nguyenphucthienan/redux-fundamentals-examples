import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';

import TodoInput from '../../components/todo-input/todo-input.component';
import TodoList from '../../components/todo-list/todo-list.component';

import { generateRandomId } from '../../components/utils/todo.utils';
import { addTodo } from '../../redux/todo/todo.actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text) {
    const { addTodo } = this.props;
    const newTodo = {
      id: generateRandomId(),
      text,
      isDone: false
    };

    addTodo(newTodo);
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h2 className='center'>Todos</h2>
        <Row>
          <Col l={8} m={10} s={12} offset='l2 m1'>
            <TodoInput onSubmit={this.handleSubmit} />
            <TodoList todos={todos} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
