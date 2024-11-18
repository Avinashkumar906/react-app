import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../store/action/alertAction';

function Alert() {
  const dispatch = useDispatch()
  const alert = useSelector(store => store.alert)
  const updateAlert = (data) => dispatch(removeAlert());
  
  return (
    <Fragment>
      { 
        alert.message ? 
          (<div className={`alert alert-${alert.type} alert-dismissible fade show mb-0`} role="alert">
            {alert.message}
            <button type="button" onClick={() => updateAlert({message:''})} className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>) : ''  
      }
    </Fragment>
  )
}

export default Alert