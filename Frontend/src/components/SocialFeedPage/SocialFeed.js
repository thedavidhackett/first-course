import React, { Component } from "react";
import PostFormContainer from "../PostForm";
import { getPosts } from "../../actions";
import Post from "../Post";

class SocialFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </div>
            <div>
              <PostFormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialFeed;
