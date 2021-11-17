import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'



const App = () => {

  return (
    <>
      <h1>Adventure Awaits</h1>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </>
  )
}

export default App
