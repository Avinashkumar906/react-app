import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import fetchApi from '../http/fetch';
import alertContext from '../context/alert/alertContext';

const Auth = () => {
  const [credentials, setCredentials] = useState({email:'',password:'',firstName:''});
  const location = useLocation();
  const navigate = useNavigate();
  const {updateAlert} = useContext(alertContext);

  const onChange = (target) => {
    setCredentials({...credentials,[target.name]:target.value})
  }

  const submitForm = async (event) =>{
    event.preventDefault();
    if(location.pathname === '/login'){
      const response = await (await fetchApi('user/signin','POST',credentials)).json();
      if(response.status === 'success'){
        localStorage.setItem('token',response.token);
        navigate('/');
        updateAlert({type:'success',message:'Authenticated successfully!'})
      } else {
        updateAlert({type:'alert',message:'Please enter valid credentials'})
      }
    }
    else{
      const response = await (await fetchApi('user/signup','POST',credentials)).json();
      if(response.status === 'success'){
        localStorage.setItem('token',response.token);
        navigate('/');
        updateAlert({type:'success',message:'Registered successfully!'})
      } else{
        updateAlert({type:'alert',message:'Some error occured, Please try with different credencials!'})
      }
    }
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-5'>
          <form className='py-4' onSubmit={(e)=>submitForm(e)}>
            {
              location.pathname === '/signup' &&
              <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input required onChange={(e)=>onChange(e.target)} value={credentials.firstName} name='firstName' type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Name" />
              </div>
            }
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input required onChange={(e)=>onChange(e.target)} value={credentials.email} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input required onChange={(e)=>onChange(e.target)} value={credentials.password} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-primary">
              {location.pathname === '/login' ? 'Login' : 'Register' }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth