import React from 'react'
import AddNote from './AddNote'

function Modal(props) {
  return (
    <div> 
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={props.onClose} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mx-4">
              {props.note ? <AddNote prepopulate={props.note}/> : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal