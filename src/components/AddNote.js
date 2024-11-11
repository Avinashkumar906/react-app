import React, { useContext, useState } from 'react'
import noteContext from '../context/note/noteContext'

function AddNote() {
  const {addNote} = useContext(noteContext)
  const [note, setNote] = useState({title:'',description:'',tag:''});

  const handleChange = (target) => {
    setNote({...note,[target.name]:target.value})
  }

  const onSubmit = () => {
    addNote(note);
  }

  return (
    <div>
      <h2>Add note</h2>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Note title</label>
            <input onChange={(event) => handleChange(event.target)} type="text" className="form-control" id="title" name="title"/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" onChange={(event) => handleChange(event.target)} className="form-control" id="description" name="description"/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" onChange={(event) => handleChange(event.target)} className="form-control" id="tag" name="tag"/>
          </div>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote