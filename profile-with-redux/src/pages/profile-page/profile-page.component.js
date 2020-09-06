import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import './profile.styles.scss';

import UserSection from '../../components/user-section/user-section.component';
import PostSection from '../../components/post-section/post-section.component';

class ProfilePage extends Component {
  render() {
    return (
      <div className='profile-page'>
        <Row>
          <Col l={4} m={6} s={12}>
            <UserSection />
          </Col>
          <Col l={8} m={6} s={12}>
            <PostSection />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfilePage;
