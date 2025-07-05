import { useState } from 'react'
import './App.css'
import Homepage from './Homepage'
import More from './More';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/more" element={<More/>}/>
      </Routes>
    </Router>
  )
}

export default App
