import React, { Component } from 'react';
import { connect } from "react-redux";
import uuidv1 from 'uuid';
import { addPost } from "../../actions";

function mapDispatchToProps(dispatch) {
    return {
      addPost: post => dispatch(addPost(post))
    };
  }

class PostForm extends Component {
    constructor() {
        super();

        this.state = {
            content: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {content} = this.state;
        const id = uuidv1();
        this.props.addPost({id, name: 'David Hackett', content})
        this.setState({ content: ""});
    }

    render() {
        const { content } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={content}
                        placeholder="Post..."
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    Post
                </button>
            </form>
        )
    }
}

const PostFormContainer = connect(null, mapDispatchToProps)(PostForm);

export default PostFormContainer;
