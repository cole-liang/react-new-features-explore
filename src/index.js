import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

/** Simple Notes board */
/** Play with useState with complex variable*/
const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const removeNote = title =>
    setNotes(notes.filter(note => note.title !== title));

  const addNote = e => {
    e.preventDefault();

    setNotes([...notes, { title, body }]);
    setBody("");
    setTitle("");
  };

  return (
    <div>
      <div>Notes:</div>
      {notes.map((note, index) => (
        <div key={note.title}>
          <h1>
            {index + 1}.{note.title}
          </h1>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
      ))}
      <p>Add Note:</p>
      <form onSubmit={addNote}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          type="text"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

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
