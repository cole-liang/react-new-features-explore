import React, { useEffect, useReducer } from "react";
import NoteList from "./noteList";

import { notesReducer } from "./../reducers/notesReducer";
import AddNoteForm from "./addNoteForm";

/** Simple Notes board */
/** Play with useState with complex variable && useEffect*/
const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    console.log("I am called EVERYTIME when the app is rendered!");
  });

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    notesDispatch({ type: "POPULATE_NOTES", notes: notesData });
    console.log("I am called ONLY ONCE when the app is INITIALLY rendered!");
  }, []);

  useEffect(() => {
    console.log('I am called whenever "notes" is changed!');
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = title => {
    notesDispatch({ type: "DELETE_NOTE", title });
  };

  return (
    <div>
      <div>Notes:</div>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm notesDispatch={notesDispatch} />
    </div>
  );
};

export default NoteApp;
