import React, { Component } from 'react';
import PostFormContainer from '../PostForm';
import { getPosts } from '../../actions';


class SocialFeed extends Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPosts());
    }



    render() {
        const { posts } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            {console.log(posts)}
                            {posts.map(post =>
                            <div key={post.id}>
                            <span>{post.name}</span>
                            <span>{post.content}</span>
                            </div>)}
                        </div>
                        <div>
                            <PostFormContainer/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SocialFeed;
