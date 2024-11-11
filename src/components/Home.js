import AddNote from './AddNote'
import Notes from './Notes'

function Home() {
  return (
    <div className='container'>
      <AddNote/>
      <Notes></Notes>
    </div>
  )
}

export default Home