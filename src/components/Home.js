// import { useNavigate } from 'react-router-dom'
import AddNote from './AddNote'
import Notes from './Notes'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  // const navigate = useNavigate();
  const {user} = useSelector(store => store.user)

  useEffect(() => {
    if(!user){
      console.log('NO user found')
      // navigate('/login')
    }
    // eslint-disable-next-line 
  }, [user])
  return (
    <div className='container'>
      <AddNote/>
      <Notes></Notes>
    </div>
  )
}

export default Home