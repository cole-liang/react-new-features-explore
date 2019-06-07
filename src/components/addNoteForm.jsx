import React, { useState } from "react";

const AddNoteForm = ({ notesDispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = e => {
    e.preventDefault();

    notesDispatch({ type: "ADD_NOTE", note: { title, body } });
    setBody("");
    setTitle("");
  };

  return (
    <React.Fragment>
      <h2>Add Note:</h2>
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
    </React.Fragment>
  );
};

export default AddNoteForm;
