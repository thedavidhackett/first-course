import React, { Component } from 'react';
import Profile from './Profile';

const david = {
  name: 'David Hackett',
  birthDate: '7/7/1990',
  company: 'MediaCross',
  job: 'Programmer',
  avatar: '',
  posts: [
    {id: 1,
    content: 'Test Post'},
    {id: 2,
    content: 'Another Test Post'}
  ]
}

class ProfilePage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            user: david,
        }
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <Profile user = {user} />
            </div>
        )
    }
}

export default ProfilePage;
