import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
