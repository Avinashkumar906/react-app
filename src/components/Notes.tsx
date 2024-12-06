import { useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem';
import NoteModal from './NoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../store/slices/noteSlice';

function Notes() {
  const dispatch = useDispatch<any>();
  const notes = useSelector((state:any) => state.note);

  const [editNote, setEditNote] = useState(null)
  const modalButton = useRef<HTMLButtonElement>(null)

  const updateHandler = (note:any) => {
    modalButton.current?.click();
    setEditNote(note)
  }
  const onCloseModal = () => setEditNote(null);

  useEffect(() => {
    dispatch(fetchAll())
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      {!notes?.length && 
        <div  className='col-sm-6 col-md-4 col-lg-3 mb-4'>
          <div className='card p-2' style={{height:'100%',alignItems:'center',justifyContent:'center'}}>
            <h3 className='text-center'><br/> Please add some notes!</h3>
          </div>
        </div>
      }
      { notes && notes.map((note:any,index:number) =>
        <NoteItem key={note._id + index} note={note} updateHandler={updateHandler} />
      )}
      <button ref={modalButton} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <NoteModal note={editNote} onClose={onCloseModal}/>
    </>
  )
}

export default Notes