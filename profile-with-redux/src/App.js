import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.scss';

import Header from './components/header/header.component';
import ProfilePage from './pages/profile-page/profile-page.component';

import { signInStart } from './redux/user/user.actions';

class App extends Component {
  componentDidMount() {
    M.AutoInit();

    // Read token from Local Storage;
    const token = 'MY_TOKEN';

    // Dispatch action
    const { signInStart } = this.props;
    signInStart(token);
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <ProfilePage />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signInStart: token => dispatch(signInStart(token))
});

export default connect(null, mapDispatchToProps)(App);
