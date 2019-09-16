import { FETCH_POSTS, NEW_POST } from "./types";

//called from componentWillMount in Posts.js
export const fetchPosts = () => dispatch => {
  console.log("fetch posts action called");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS, //name of the store / "state"
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
        type: NEW_POST, //name of the store / "state"
        payload: post //payload = data = whatever is written to the "state"
      })
    );
};

// export const testAction = () => dispatch => {
//   dispatch
// }
