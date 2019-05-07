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
            <div class="row">
                <div class="col">
                    <div><img src={user.avatar} alt=""></img></div>
                    <div><p>{user.name}</p></div>
                    <div><p>{user.birthDate}</p></div>
                    <div><p>{user.company}</p></div>
                    <div><p>{user.job}</p></div>
                    <div>{user.posts.map(post => <div key={post.id}>{post.content}</div>)}</div>
                </div>
            </div>
        )
    }
}

export default Profile;
