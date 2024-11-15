import { useNavigate } from 'react-router-dom'
import AddNote from './AddNote'
import Notes from './Notes'
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token'))
      navigate('/signin')
    // eslint-disable-next-line 
  }, [])
  return (
    
    <div className='container'>
      <AddNote/>
      <Notes></Notes>
    </div>
  )
}

export default Home