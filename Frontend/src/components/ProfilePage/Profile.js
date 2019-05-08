import React, { Component } from 'react';

class Profile extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        }
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div><img src={user.avatar} alt=""></img></div>
                            <div><p>Name: {user.name}</p></div>
                            <div><p>Born: {user.birthDate}</p></div>
                            <div><p>{user.company} {user.job}</p></div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                            <div>{user.posts.map(post => <div key={post.id}><p>{post.content}</p><p>-{user.name}</p></div>)}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
