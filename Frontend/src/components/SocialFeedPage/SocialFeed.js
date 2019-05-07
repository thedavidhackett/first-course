import React, { Component } from 'react';

class SocialFeed extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            posts : props.posts,
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <div class="row">
                <div class="col">
                    <div>
                    {posts.map(post =>
                    <div key={post.id}>
                    <span>{post.name}</span>
                    <span>{post.content}</span>
                    </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialFeed;
