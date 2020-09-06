import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

import './profile.styles.scss';

class ProfilePage extends Component {
  render() {
    const {
      user: { id, username, firstName, lastName, project, imageUrl }
    } = this.props;

    return (
      <div className='profile-page'>
        <Row>
          <Col l={4} m={6} s={12}>
            <Card
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
          </Col>
          <Col l={8} m={6} s={12}>
            <Card title='Post #1'>
              <span>
                Nullam pharetra volutpat elementum. Donec efficitur libero eget
                leo fermentum rhoncus. Suspendisse vitae eleifend elit.
                Curabitur mollis fermentum vulputate. Lorem.
              </span>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfilePage;
