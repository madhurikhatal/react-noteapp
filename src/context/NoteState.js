import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000"


  const noteInitial =[]
   
     const [notes, setNotes] = useState(noteInitial)

const getNotes= async()=>{
  const response = await fetch(`${host}/api/notes/fetchallnotes `, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ODBlYTRlYzE1YmM4M2I0ZDYyOTU1In0sImlhdCI6MTY1MTA2ODE0OH0.FLYSLKZh41_L6BIsnVIVDQk3UQumwu7CHXGRue7__fs"

    },
  });
  const json = await response.json();
  console.log(json);
 setNotes(json)
}

  //add 
  const addNote = async (title, description, tag) => {
    console.log("Add note");
    const response = await fetch(`${host}/api/notes/addnote `, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ODBlYTRlYzE1YmM4M2I0ZDYyOTU1In0sImlhdCI6MTY1MTA2ODE0OH0.FLYSLKZh41_L6BIsnVIVDQk3UQumwu7CHXGRue7__fs"

      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();


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

  //EditNote
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id} `, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ODBlYTRlYzE1YmM4M2I0ZDYyOTU1In0sImlhdCI6MTY1MTA2ODE0OH0.FLYSLKZh41_L6BIsnVIVDQk3UQumwu7CHXGRue7__fs"

      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
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
  const deleteNote = async (id) => {
    console.log("note deleted :" + id);

    const response = await fetch(`${host}/api/notes/deletenote/${id} `, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ODBlYTRlYzE1YmM4M2I0ZDYyOTU1In0sImlhdCI6MTY1MTA2ODE0OH0.FLYSLKZh41_L6BIsnVIVDQk3UQumwu7CHXGRue7__fs"

      },
      // body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;











































