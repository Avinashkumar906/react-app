import React from 'react'
import AddNote from './AddNote'

function Modal(props) {
  return (
    <div> 
      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h4 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h4> */}
              <button type="button" className="btn-close" onClick={props.onClose} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {props.note ? <AddNote prepopulate={props.note}/> : ''}
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal