import App from './App';
import React, { Component } from 'react';

class AppContainer extends Component
{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}

export default AppContainer;
