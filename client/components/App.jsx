import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </>
  )
}

export default App
