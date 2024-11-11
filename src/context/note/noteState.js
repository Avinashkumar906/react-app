import { useState } from "react"
import noteContext from "./noteContext"

const mockNotes = [
  {
    "_id": "67175042fcc1a735b53d99a7",
    "user": "67175000fcc1a735b53d99a0",
    "title": "this is first",
    "description": "this is description of 2nd note",
    "timestamp": "2024-10-22T07:09:28.309Z",
    "tag": "general",
    "__v": 0
  },
  {
    "_id": "67175042fcc1a735b53d99a8",
    "user": "67175000fcc1a735b53d99a0",
    "title": "this is second",
    "description": "this is description of 2nd note",
    "timestamp": "2024-10-22T07:09:28.309Z",
    "tag": "general",
    "__v": 0
  }
]

const NoteState = (props) => {
  const [notes, setNotes] = useState(mockNotes)
  const fetchApi = (url, method = 'GET', payload = '') => {
    const request = {method, headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBdmluYSIsImxhc3ROYW1lIjoiTmFzaCIsImVtYWlsIjoiYXZpbmFzaGt1bWFyNUBnbWFpbC5jb20iLCJwaG9uZSI6Ijg4MDIzMjMyMzEiLCJfaWQiOiI2NzE3NTAwMGZjYzFhNzM1YjUzZDk5YTAiLCJfX3YiOjAsImlhdCI6MTcyOTU4MTA1Nn0.kIDL-Wr5pfG_OUBvnWYML1xsq_l4MdOfRIdJJJZrDQ8"
      }
    }
    if(method !== 'GET')
      request.body = JSON.stringify(payload)
    
    return fetch(`http://localhost:8080/${url}`, request)
  }

  const fetchNotes = async () => {
    const response = await fetchApi('note/getAll');
    const notes = await response.json()
    console.log(notes)
  }
  // Add note APIcall
  const addNote = (note) => {
    setNotes(notes.concat(note));
  }
  // delete note APIcall
  const delNote = (id) => {
    const note = notes.filter(f => f._id !== id);
    setNotes(note)
  }

  const editNote = (id, note) => {
    const filteredNotes = notes.filter(f => f._id !== id);
    setNotes(filteredNotes.concat(note));
  }

  return (
    <noteContext.Provider value={{ notes, addNote, delNote, editNote, fetchNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
