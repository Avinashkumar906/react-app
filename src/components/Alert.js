import React, { Fragment, useContext} from 'react'
import alertContext from '../context/alert/alertContext';

function Alert() {
  const {alert,updateAlert} = useContext(alertContext)
  // const updateAlert = (data) => setAlert({type:data?.type,message:data?.message});
  
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