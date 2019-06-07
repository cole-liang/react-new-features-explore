import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NoteApp from "./components/noteApp";

ReactDOM.render(<NoteApp />, document.getElementById("root"));

/** Simple Counter */
/** Play with useState with simple variable*/

// const App = props => {
//   const [count, setCount] = useState(props.count);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
