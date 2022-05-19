import './App.css'
import { newExercises, getPastWorkouts } from '../apiCalls'
import Login from '../Login/Login'
import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import CreateWorkoutForm from '../CreateWorkoutForm/CreateWorkoutForm'
import PastWorkouts from '../PastWorkouts/PastWorkouts'
import Social from '../Social/Social'
import SuggestedWorkouts from '../SuggestedWorkouts/SuggestedWorkouts'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [pastworkouts, setPastWorkouts] = useState([])
  const [allExercises, setAllExercises] = useState([])

  useEffect(() => {
    newExercises()
    .then(data => setAllExercises([data]))
    getPastWorkouts(1)
    .then(data => setPastWorkouts([data]))
    .then(console.log(pastworkouts))
  }, []) 
   
  return (
    <div className='App'>
      <section className='login-section'>
        <Login setCurrentUser={setCurrentUser} />
      </section>
      <h1 className='title'>GREEK GOD BOD</h1>
      <div className='components'>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/createworkout' element={<CreateWorkoutForm allExercises={allExercises}/>} />
          <Route exact path='/suggestedworkouts' element={<SuggestedWorkouts />} />
          <Route exact path='/pastworkouts' element={<PastWorkouts />} />
          <Route exact path='/social' element={<Social />} />
        </Routes>
      </div>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
