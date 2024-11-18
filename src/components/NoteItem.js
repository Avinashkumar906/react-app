import React from 'react'
import { useDispatch } from 'react-redux';
import { delNote } from '../store/action/noteAction';

function NoteItem(props) {
    const { note, updateHandler } = props;
    const dispatch = useDispatch();
    // const { delNote } = useContext(noteContext)

    const onDelete = (id) => dispatch(delNote(id))

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <h5> <span className="badge bg-dark text-light">{note.tag}</span></h5>
                    <div className='row justify-content-end pe-3'>
                        <div className='col-sm-1 icon' onClick={() => onDelete(note._id)}>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                        <div className='col-sm-1 icon' onClick={() => updateHandler(note)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem