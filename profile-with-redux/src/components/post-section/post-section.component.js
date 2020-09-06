import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-materialize';
import { getPostsStart } from '../../redux/post/post.actions';

class PostSection extends Component {
  componentDidMount() {
    const { getPostsStart } = this.props;
    getPostsStart();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='post-section'>
        {posts.map(post => (
          <Card key={post.id} title={post.title}>
            <span>{post.content}</span>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  getPostsStart: () => dispatch(getPostsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSection);
