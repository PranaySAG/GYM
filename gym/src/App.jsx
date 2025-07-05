import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App