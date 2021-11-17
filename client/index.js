import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


import Home from './components/Home'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Home />
    </Router>,
    document.getElementById('app')
  )
})
