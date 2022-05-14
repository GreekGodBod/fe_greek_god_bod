import './App.css'
import { newExercises } from '../apiCalls'
import Login from '../Login/Login'
import { useState } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState([])

  return (
    <div className='App'>
      <section className='login-section'>
        <Login setCurrentUser={setCurrentUser} />
      </section>
      <h1 className='title'>GREEK GOD BOD</h1>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
