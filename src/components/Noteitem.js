import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'

const Noteitem = (props) => {
  const context = useContext(NoteContext)


  const { deleteNote } = context;
  const { note } = props;

  return (
    // <div>Noteitem</div>
    <>
      <div className='col-md-3'>
        <div className="card my-3" >

          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text">{note.tag}</p>
            <i class="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
            <i class="fa-solid fa-pen-to-square mx-2"></i>

          </div>
        </div>
      </div>
    </>
  )
}

export default Noteitem