import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import TodoInput from '../../components/todo-input/todo-input.component';

class HomePage extends Component {
  render() {
    return (
      <div className='center'>
        <h2>Todos</h2>
        <Row>
          <Col l={8} m={10} s={12} offset='l2 m1'>
            <TodoInput />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
