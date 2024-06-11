import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Error from './pages/Error'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/contact" Component={Contact}></Route>
      <Route path="/service" Component={Service}></Route>
      <Route path="*" Component={Error}></Route>
      </Routes>
    </>
  )
}

export default App
