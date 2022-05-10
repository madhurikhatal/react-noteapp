// import React, { useContext, useState } from 'react'
// import NoteContext from '../context/NoteContext';
// const AddNote = () => {


//     const context = useContext(NoteContext)
//     const { addNote } = context;

//     const { note, setNote } = useState({ title: "", description: "", tag: "general" });

//     const handleClick = (e) => {
//         e.preventDefault();
//         addNote(note.title, note.description, note.tag)
//     }
//     const onChange = (e) => {
//         setNote({ ...note, [e.target.name]: e.target.value })

//     }

//     // const addNote = (title, description, tag) => {
//     return (
//         <div>
//             <form>
//                 <div className="mb-3">
//                     <h2>Create Notes</h2>
//                     <label htmlFor="exampleInputEmail1" className="form-label" onChange={onChange}>Title</label>
//                     <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label" onChange={onChange}>Description</label>
//                     <input type="text" className="form-control" name='description' id="description" />
//                 </div>

//                 <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
//             </form>
//         </div>
//     )
// }
// // }

// export default AddNote











import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'
const AddNote = () => {

    
const context = useContext(NoteContext)
const { addNote} = context;
const [note, setNote] = useState({title:"", description:"",tag:"general"})

const handleClick = (e)=>{
  e.preventDefault();
  addNote(note.title, note.description, note.tag);
  // setNote({title: "", description: "", tag: ""})
}

    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }

  return (
    <>
     <form>
        <div className="mb-3">
          <h2>Create Notes</h2>
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" id="title" onChange={onChange}  />
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" name="description" id="description"  onChange={onChange}  />
        </div>
       
        <button type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
      </form>
      <br></br>
    </>
  )
}

export default AddNote