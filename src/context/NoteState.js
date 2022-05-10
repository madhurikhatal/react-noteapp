import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {


  const noteInitial =
    [
      {
        "_id": "626806236f6af5a64e4adf5d",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Assignment",
        "description": "ReactJS",
        "tag": "study",
        "date": "2022-04-26T14:48:03.797Z",
        "__v": 0
      },
      {
        "_id": "626806ec6f6af5a64e4adf60",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Self Study",
        "description": "DSA",
        "tag": "study",
        "date": "2022-04-26T14:51:24.229Z",
        "__v": 0
      },
      {
        "_id": "626806fe6f6af5a64e4adf62",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Self Study",
        "description": "DSA",
        "tag": "study",
        "date": "2022-04-26T14:51:42.063Z",
        "__v": 0
      },
      {
        "_id": "6269446d4fe99a1763a35c73",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Shopping",
        "description": "Grocery Shopping",
        "tag": "Home",
        "date": "2022-04-27T13:26:05.976Z",
        "__v": 0
      },
      {
        "_id": "6269448f4fe99a1763a35c75",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Revision",
        "description": "ReactJS Revision at 5PM",
        "tag": "Study",
        "date": "2022-04-27T13:26:39.545Z",
        "__v": 0
      },
      {
        "_id": "626944c44fe99a1763a35c77",
        "user": "626805a46f6af5a64e4adf59",
        "title": "Exercise",
        "description": "Yoga 5AM-6AM",
        "tag": "Self care",
        "date": "2022-04-27T13:27:32.493Z",
        "__v": 0
      }
    ]

  const [notes, setNotes] = useState(noteInitial)


  //add 
  const addNote = (title, description, tag) => {
    console.log("Add note");
    const note = {
      "_id": "626944c44fe99a1763a35c00",
      "user": "62680ea4ec15bc83b4d62955",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-05-04T14:54:22.014Z",
      "__v": 0
    }

    setNotes(notes.concat(note))
    // return addNote

  }

  //Edit
  const editNote = (id, title, description, tag) => {
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }

  }

  //delete
  const deleteNote = (id) => {
    console.log("note deleted :" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;











































