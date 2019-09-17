import React, { Component } from "react";
import PropTypes from "prop-types"; //QA not needed
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions"; //this is the action

class Posts extends Component {
  componentWillMount() {
    console.log("mounting");
    //this the function that will call the API and write the initial redux store.
    this.props.fetchPosts();
    console.log("mounting finished");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      //this function does not touch the redux store, simply adds the newpost to props
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    //props.posts is from the store?
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Postsssss</h1>
        {postItems}
      </div>
    );
  }
}

//not needed just for QA, check props are of correct type
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
//====================================

const mapStateToProps = state => ({
  //items and item are from the store which picks them up from the reducer
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps, //map posts and newPost to props
  { fetchPosts } //map dispatcher to props
)(Posts); //connect these props to the component
