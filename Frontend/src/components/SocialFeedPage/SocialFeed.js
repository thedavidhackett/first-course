import React, { Component } from 'react';
import { requestPosts } from '../../actions';
import axios from 'axios';

class SocialFeed extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            posts : props.posts,
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestPosts());
        const testPosts = axios.get('localhost:3001/api/posts').then( response => {return response.data})
        console.log(testPosts);
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
