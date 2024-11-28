// import { useNavigate } from 'react-router-dom'
import AddNote from './AddNote'
import { useEffect, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
const LazyNotes = lazy(() =>import('./Notes')); //lazy loading..

function Home() {
  // const navigate = useNavigate();
  const {user} = useSelector((store:any) => store.user)

  useEffect(() => {
    if(!user){
      console.log('NO user found')
      // navigate('/login')
    }
    // eslint-disable-next-line 
  }, [user])
  return (
    <div className='container'>
      <h2 className='text-center py-3'>Your notes</h2>
      <div className='row'>
        <AddNote/>
        <Suspense fallback={<div>loading....</div>}>
          <LazyNotes/>
        </Suspense>
      </div>
    </div>
  )
}

export default Home