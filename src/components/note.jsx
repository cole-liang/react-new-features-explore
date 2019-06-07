import React, { useEffect } from "react";

const Note = ({ note, index, removeNote }) => {
  //Make sure the function is called when the component is rendered
  //rathen than being called everytime sth is changed(if no second arg specified)
  useEffect(() => {
    console.log("Called only when Note component is rendered");
    return () => {
      console.log("Called when Note component unmounts");
    };
  }, []);

  return (
    <div>
      <h1>
        {index + 1}.{note.title}
      </h1>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

export default Note;
