import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import CreatePost from './Pages/CreatePost'
import Feed from './Pages/Feed'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CreatePost />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/your-posts' element={<Feed />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

 
