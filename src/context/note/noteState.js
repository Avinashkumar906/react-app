import { useContext, useState } from "react"
import noteContext from "./noteContext"
import fetchApi from "../../http/fetch"
import alertContext from "../alert/alertContext"

const NoteState = (props) => {
  const [notes, setNotes] = useState([])
  const { updateAlert } = useContext(alertContext);
  // FETCH ALL NOTES
  const fetchNotes = async () => {
    const response = await fetchApi('note/getAll');
    setNotes(await response.json())
  }
  // Add nNote
  const addNote = async (note) => {
    const response = await fetchApi('note/addNote', 'POST', note);
    const json = await response.json()
    if(json.status === 'success'){
      setNotes(notes.concat(json.result));
      updateAlert({type:'primary',message:'Note added successfully!'})
    }
    else{
      updateAlert({type:'warning',message:'Some error occured'})
    }
  }
  // delete note APIcall
  const delNote = async (id) => {
    const response = await fetchApi(`note/deleteNote/${id}`, 'DELETE');
    const json = await response.json();
    if(json.status === 'success'){
      const note = notes.filter(f => f._id !== id);
      setNotes(note)
      updateAlert({type:'primary',message:'Note deleted successfully!'})
    } else{
      // console.log(`some error ${json.errors?.errors}`)
      updateAlert({type:'warning',message:'Some error occured'})
    }
  }

  const editNote = async (_id, note) => {
    // console.log(id,note)note/updateNote/67174835c583f3ef3db5c675
    const response = await fetchApi(`note/updateNote/${_id}`, 'PUT', note);
    const json = await response.json();
    if(json.status === 'success'){
      const filteredNotes = notes.filter(f => f._id !== _id);
      setNotes(filteredNotes.concat({...note,_id}));
      updateAlert({type:'primary',message:'Note updated successfully!'})
    } else{
      // console.log(`some error ${json.errors?.errors}`)
      updateAlert({type:'warning',message:'Some error occured'})
    }
  }

  return (
    <noteContext.Provider value={{ notes, addNote, delNote, editNote, fetchNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
