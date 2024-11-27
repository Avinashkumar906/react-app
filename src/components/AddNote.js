import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote, editNote } from '../store/action/noteAction';
// import noteContext from '../context/note/noteContext'

function AddNote(props) {
  const { prepopulate } = props;
  const dispatch = useDispatch();
  // const { addNote, editNote } = useContext(noteContext)
  const closeRef = useRef(null)
  const [note, setNote] = useState({
    title: prepopulate?.title || '',
    description: prepopulate?.description || '',
    tag: prepopulate?.tag || '',
  });

  const handleChange = (target) => {
    setNote({ ...note, [target.name]: target.value })
  }

  const onSubmit = () => {
    if (prepopulate){
      dispatch(editNote(prepopulate._id, note))
      closeRef.current.click()
    }
    else{
      dispatch(addNote(note))
    }
  }

  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
      {/* <h4>{prepopulate?'Update':'Add'} Note</h4> */}
      <div className="card p-2">
        <form className='my-2'>
          {/* <h3>{prepopulate ? 'Update' : 'Add'} Note</h3> */}
          <div className="mb-1">
            <label htmlFor="title" className="form-label">Note title</label>
            <input value={note.title} onChange={(event) => handleChange(event.target)} type="text" className="form-control" id="title" name="title" />
          </div>
          <div className="mb-1">
            <label htmlFor="description" className="form-label">Description</label>
            <input value={note.description} type="text" onChange={(event) => handleChange(event.target)} className="form-control" id="description" name="description" />
          </div>
          <div className="mb-1">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input value={note.tag} type="text" onChange={(event) => handleChange(event.target)} className="form-control" id="tag" name="tag" />
          </div>
          <div className='text-center pt-2'>
            <button type="button" ref={ closeRef } className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success px-4" onClick={onSubmit}>{prepopulate?'Update':' Add '} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNote 