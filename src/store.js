import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

//https://github.com/reduxjs/redux-thunk
//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.

const middleware = [thunk];

const store = createStore(
  rootReducer, //allReducers
  initialState, //empty state
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux devtools extension dont forget this shit
  )
);

//sent to App.js and passed through Provider
export default store;
