import { FETCH_POSTS, NEW_POST } from "./types";

//called from componentWillMount in Posts.js
export const fetchPosts = () => dispatch => {
  console.log("fetch posts action called");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        //name of the reducer switch case which will choose where the payload is written in the state
        type: FETCH_POSTS,
        payload: posts //payload = data = whatever is written to the "state"
      })
    );
};

//postData is passed from "this.props.createPost(post);" from PostForm.js
export const createPost = postData => dispatch => {
  console.log("create post action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post //payload = data = whatever is written to the "state"
      })
    );
};

// export const testAction = () => dispatch => {
//   dispatch
// }
