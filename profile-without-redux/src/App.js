import React, { Component } from 'react';
import axios from 'axios';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.scss';

import Header from './components/header/header.component';
import ProfilePage from './pages/profile-page/profile-page.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 0,
        username: 'user',
        firstName: 'User',
        lastName: 'User',
        imageUrl:
          'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
      }
    };
  }

  componentDidMount() {
    M.AutoInit();

    axios
      .get('http://localhost:5000/api/users/me')
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.error(error));
  }

  render() {
    const { user } = this.state;
    return (
      <div className='container'>
        <Header user={user} />
        <ProfilePage user={user} />
      </div>
    );
  }
}

export default App;
