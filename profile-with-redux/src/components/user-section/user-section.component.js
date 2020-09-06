import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Icon } from 'react-materialize';

import './user-section.styles.scss';

class UserSection extends Component {
  render() {
    const {
      currentUser: { id, username, firstName, lastName, project, imageUrl }
    } = this.props;

    return (
      <Card
        className='user-section'
        actions={[
          <Icon key='phone' className='action-button'>
            phone
          </Icon>,
          <Icon key='mail' className='action-button'>
            mail_outline
          </Icon>
        ]}
        header={<CardTitle image={imageUrl} />}
      >
        <p className='username'>{username}</p>
        <div className='user-info-container'>
          <p className='user-info'>
            <span className='title'>Full Name: </span>
            {firstName} {lastName}
          </p>
          <p className='user-info'>
            <span className='title'>KMS ID: </span>
            {id}
          </p>
          <p className='user-info'>
            <span className='title'>Project: </span>
            {project}
          </p>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserSection);
