import { useDispatch } from 'react-redux';
import { delNote } from '../store/action/noteAction';

function NoteItem(props:any) {
    const { note, updateHandler } = props;
    const dispatch = useDispatch<any>();

    const onDelete = (id:string) => dispatch(delNote(id))

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className="card" style={{height:'100%'}}>
                <div className="card-body">
                    <div className='row justify-content-space-between pt-0'>
                        <div className='col-sm-8'>
                            <h5> 
                                <span className="badge bg-secondary text-light">{note.tag}</span>
                            </h5>
                        </div>
                        <div className='col-sm-4'>
                            <div className='d-flex justify-content-end'>
                                <div className='col-sm-5 icon' onClick={() => updateHandler(note)}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>
                                <div className='col-sm-5 icon' onClick={() => onDelete(note._id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom'/>
                    <h3 className="card-title">{note.title}</h3>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem