import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../store/action/alertAction';

function Alert() {
  const dispatch = useDispatch<any>()
  const alert = useSelector((store:any) => store.alert)
  const updateAlert = () => dispatch(removeAlert());
  
  return (
    <Fragment>
      { 
        alert.message ? 
          (<div className={`alert alert-${alert.type} alert-dismissible fade show mb-0`} style={{'position':'absolute','left':0,'right':0}} role="alert">
            {alert.message}
            <button type="button" onClick={updateAlert} className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>) : ''  
      }
    </Fragment>
  )
}

export default Alert