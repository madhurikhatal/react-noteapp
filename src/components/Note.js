import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Note = () => {
    const context = useContext(NoteContext)


    const { notes } = context;
    // const{addNote}=context;


  return (
    <>
    <AddNote/>
    <div className='row my-3'>
    <h2>your Notes</h2>
    {notes.map((note)=>{
      // return note.title;
      return   <Noteitem key={note._id} note={note}/>
    })}

  </div>
  </>
  )
}

export default Note