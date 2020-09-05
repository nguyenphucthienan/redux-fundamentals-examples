import React, { Component } from 'react';
import { TextInput, Icon } from 'react-materialize';

import './todo-input.styles.scss';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { text } = this.state;
    const { onSubmit } = this.props;

    onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <form className='input-form' onSubmit={this.handleFormSubmit}>
        <TextInput
          icon={<Icon>event_note</Icon>}
          label='Add a task'
          value={text}
          onChange={this.handleTextChange}
        />
      </form>
    );
  }
}

export default TodoInput;
