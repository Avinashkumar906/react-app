import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import NoteState from "./context/note/noteState";
import AlertState from "./context/alert/alertState";
import Auth from "./components/Auth";
import PrivateRoutes from "./components/PrivateRoutes";


function App() {
  return (
    <Router className="App">
      <AlertState>
        <NoteState>
          <Navbar/>
          <Alert/>
          <div className="container">
            <div className="py-4"></div>
            <Routes >
              <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Home/>}></Route>
              </Route>
              <Route exact path="/about" element={<About/>}></Route>
              <Route exact path="/login" element={<Auth/>}></Route>
              <Route exact path="/signup" element={<Auth/>}></Route>
            </Routes>
          </div>
        </NoteState>
      </AlertState>
    </Router>
  );
}

export default App;
