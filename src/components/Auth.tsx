import  { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../store/slices/userSlice';
// import { userLogin, userSignup } from '../store/action/userAction';

const Auth = () => {
  const [credentials, setCredentials] = useState({email:'',password:'',firstName:''});
  const location = useLocation();
  const {user} = useSelector((store:any) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const onChange = (target:HTMLInputElement) => {
    setCredentials({...credentials,[target.name]:target.value})
  }

  const submitForm = async (event:any) =>{
    event.preventDefault();
    (location.pathname === '/login') ? dispatch(login(credentials)) : dispatch(signup(credentials));
  }

  useEffect(() => {
    if(user?.email && user?.firstName)
      navigate('/')
  }, [user,navigate])
  

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-5'>
          <form className='py-4' onSubmit={(e)=>submitForm(e)}>
            <h2 className='mb-2'>{location.pathname === '/login' ? 'Sign in' : 'Register'}</h2>
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