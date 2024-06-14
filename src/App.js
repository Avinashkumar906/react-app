import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>  
        <Navbar/>
        <Routes path='/'>
          <Route path="/:category" Component={News}></Route>
          {/* <Route path="/2" element={<Navbar/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

