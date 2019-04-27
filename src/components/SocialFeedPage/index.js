import React, { Component } from 'react';
import SocialFeed from './SocialFeed';

const samplePosts = [
    {
        id: 1,
        name: "Roger Hornsby",
        content: "I care very deeply about this generic social issue"
    },
    {
        id: 2,
        name: "Ty Cobb",
        content: "Motivational statement that makes you feel bad about your lfe choices"
    },
    {
        id: 3,
        name: "Lou Gehrig",
        content: "Meme, meme, meme"
    }
]

class SocialFeedPage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            posts: samplePosts,
        }
    }
    render() {
        const { posts } = this.state;
        return (
            <div>
                <SocialFeed posts = {posts} />
            </div>
        )
    }
}

export default SocialFeedPage;
