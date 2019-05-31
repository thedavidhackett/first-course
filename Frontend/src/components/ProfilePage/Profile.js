import React, { Component } from "react";
import { getProfile } from "../../actions";
import Post from "../Post";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProfile());
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div>
                  <img src={user.avatar} alt="" />
                </div>
                <div>
                  <p>Name: {user.name}</p>
                </div>
                <div>
                  <p>Born: {user.birthDate}</p>
                </div>
                <div>
                  <p>
                    {user.company} {user.job}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                {user.posts.map(post => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Profile;
