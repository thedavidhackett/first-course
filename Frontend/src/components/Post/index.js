import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <span>{post.content}</span>
        <span>- {post.name}</span>
      </div>
    );
  }
}

export default Post;
