import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { userLogout } from '../store/action/userAction';


function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const {user} = useSelector((store:any) => store.user)
  // useEffect(() => {
  //   console.log("User changed",user)
  // }, [user])
  
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand"  >Navbar</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''} `} aria-current="page" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to='/about'>About</Link>
            </li>
          </ul>
          {
            user?.email ?
              <div className="d-flex">
                <button type='button' onClick={() => dispatch(userLogout())} className="btn btn-outline-light me-2">Sign out</button>
              </div> :
              <div className="d-flex">
                <Link className="btn btn-outline-light me-2" to="/login">Sign In</Link>
                <Link className="btn btn-primary" to="/signup">Register</Link>
              </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar