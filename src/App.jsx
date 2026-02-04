import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/NavBar';

function App() {
  //parent
  //array is good to track the list of tasks
  //as the array changes constantly we have to show the change asap -> state 

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
