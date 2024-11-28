import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import PrivateRoutes from './components/PrivateRoutes'
import Home from './components/Home'
import About from './components/About'
import Auth from './components/Auth'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Alert/>
        <div className="container">
            <div className="py-4"></div>
            <Routes >
              <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Home/>}></Route>
              </Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/login" element={<Auth/>}></Route>
              <Route path="/signup" element={<Auth/>}></Route>
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
