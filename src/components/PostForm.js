import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost, fetchPosts } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    // this.props.fetchPosts();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    //call action with props, passing post
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h1>Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title :</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body :</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null, //no props to display in this component so leave as null
  { createPost, fetchPosts } //set createPost action to prop, multiple actions can be sent to this object
)(PostForm);
