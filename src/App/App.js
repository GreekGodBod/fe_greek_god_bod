import './App.css'
import { newExercises } from '../apiCalls'
import Login from '../Login/Login'
import { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState([])

  return (
    <div className='App'>
      <section className='login-section'>
        <Login setCurrentUser={setCurrentUser} />
      </section>
      <h1 className='title'>GREEK GOD BOD</h1>
      <div className='components'>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
