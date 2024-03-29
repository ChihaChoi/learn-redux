import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  //view store
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  //dispatch or call the action
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable information</h3> : "no see"}
    </div>
  );
}

export default App;
