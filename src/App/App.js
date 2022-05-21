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
  
  const [currentUser, setCurrentUser] = useState(null)
  const [pastworkouts, setPastWorkouts] = useState([])
  const [suggestedWorkouts, setSuggestedWorkouts]= useState([])
  const [allExercises, setAllExercises] = useState([])
  const [createdWorkouts, setCreatedWorkouts] = useState([])

  useEffect(() => {
    newExercises()
    .then(data => setAllExercises(data))
   
    // .then(console.log(pastworkouts))
  }, []) 

 const addWorkout = (newWorkout) => {
    setCreatedWorkouts([...createdWorkouts, newWorkout]) 
  }

  const setUser = (userId) => {
    setCurrentUser(userId)
    getPastWorkouts(userId)
    .then(data => console.log("PastWorkouts",data))
  }
   console.log(currentUser)
  return (
    <div className='App'>
      <section className='login-section'>
      {/* <Login setUser={setUser} /> */}
      </section>
      <h1 className='title'>GREEK GOD BOD</h1>
      <div className='components'>
        <Routes>
          <Route exact path='/login' element={<Login setUser={setUser} />} />
          <Route exact path='/dashboard/user/:id'  element={<Dashboard currentUser={currentUser}/>} />
          <Route exact path='/createworkout/user/:id' element={<CreateWorkoutForm allExercises={allExercises} addWorkout={addWorkout}/>} />
          <Route exact path='/suggestedworkouts/user/:id' element={<SuggestedWorkouts />} />
          <Route exact path='/pastworkouts/user/:id' element={<PastWorkouts />} />
          <Route exact path='/social/user/:id' element={<Social />} />
        </Routes>
      </div>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
