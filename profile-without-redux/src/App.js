import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.scss';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className='container'>
        <h1>Redux</h1>
      </div>
    );
  }
}

export default App;
