import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import NoteState from "./context/note/noteState";


function App() {
  return (
    <Router className="App">
      <NoteState>
        <Navbar/>
        <Alert/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="/" element={<Home/>}></Route> */}
            <Route exact path="/about" element={<About/>}></Route>
            
          </Routes>
        </div>
      </NoteState>
    </Router>
  );
}

export default App;
