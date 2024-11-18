import React, { useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem';
import NoteModal from './NoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../store/action/noteAction';

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const [editNote, setEditNote] = useState(null)
  const modalButton = useRef(null)

  const updateHandler = (note) => {
    modalButton.current.click();
    setEditNote(note)
  }
  const onCloseModal = () => setEditNote(null);

  useEffect(() => {
    dispatch(fetchAll())
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='py-4'>
      <button ref={modalButton} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <NoteModal note={editNote} onClose={onCloseModal}/>
      <h2>Your notes</h2>
      {!notes?.length && <p>No notes available! </p>}
      <div className='row'>
        {notes?.map((note,index)=><NoteItem key={note._id + index} note={note} updateHandler={updateHandler} />)}
      </div>
    </div>
  )
}

export default Notes