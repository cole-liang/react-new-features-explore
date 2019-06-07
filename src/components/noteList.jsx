import React from "react";
import Note from "./note";

const NoteList = ({ notes, removeNote }) => {
  return notes.map((note, index) => (
    <Note key={note.title} note={note} index={index} removeNote={removeNote} />
  ));
};

export default NoteList;
