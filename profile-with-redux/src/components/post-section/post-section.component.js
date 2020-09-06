import React, { Component } from 'react';
import { Card } from 'react-materialize';

class PostSection extends Component {
  render() {
    return (
      <div className='post-section'>
        <Card title='Post #1'>
          <span>
            Nullam pharetra volutpat elementum. Donec efficitur libero eget leo
            fermentum rhoncus. Suspendisse vitae eleifend elit. Curabitur mollis
            fermentum vulputate. Lorem.
          </span>
        </Card>
        <Card title='Post #2'>
          <span>
            Maecenas vel aliquet orci, ac aliquam tellus. Nullam ut tempor
            justo. Vestibulum viverra bibendum eros ac eleifend. Curabitur et
            ante.
          </span>
        </Card>
        <Card title='Post #3'>
          <span>
            Maecenas consequat massa in enim mollis finibus. Praesent vitae
            justo tortor. Vestibulum sagittis magna eget bibendum aliquet. Donec
            volutpat eu.
          </span>
        </Card>
        <Card title='Post #4'>
          <span>
            Nam vel turpis malesuada, facilisis risus vestibulum, elementum
            justo. Etiam iaculis eu eros volutpat posuere. Morbi sollicitudin
            tellus ante, pharetra.
          </span>
        </Card>
      </div>
    );
  }
}

export default PostSection;
