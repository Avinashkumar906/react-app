import React, { useContext, useEffect } from 'react'
import noteContext from '../context/note/noteContext';
import NoteItem from './NoteItem';

function Notes() {
  const { notes, fetchNotes }  = useContext(noteContext)
  useEffect(() => {
    fetchNotes()
  }, [])
  
  return (
    <div className='py-4'>
      <h2>Your notes</h2>
      <div className='row'>
        {notes.map((note,index)=><NoteItem key={note._id + index} note={note}/>)}
      </div>
    </div>
  )
}

export default Notes