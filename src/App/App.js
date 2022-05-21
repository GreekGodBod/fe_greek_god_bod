import './App.css'
import { newExercises, getPastWorkouts } from '../apiCalls'
import Login from '../Login/Login'
import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import CreateWorkoutForm from '../CreateWorkoutForm/CreateWorkoutForm'
import PastWorkouts from '../PastWorkouts/PastWorkouts'
import Social from '../Social/Social'
import SuggestedWorkouts from '../SuggestedWorkouts/SuggestedWorkouts'
import DoWorkout from '../DoWorkout/DoWorkout'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [pastworkouts, setPastWorkouts] = useState([])
  const [suggestedWorkouts, setSuggestedWorkouts]= useState([])
  const [allExercises, setAllExercises] = useState([])
  const [createdWorkouts, setCreatedWorkouts] = useState([])
  const [oneWorkout, setOneWorkout] = useState({})

  useEffect(() => {
    newExercises()
    .then(data => setAllExercises(data))
  }, []) 

 const addWorkout = (newWorkout) => {
    setCreatedWorkouts([...createdWorkouts, newWorkout]) 
  }

  const setUser = (userId) => {
    setCurrentUser(userId)
    getPastWorkouts(userId)
    .then(data => setPastWorkouts(data))
  }
   
  const findWorkout = (workoutName) => {
    const workout = createdWorkouts.find(workout => workout.name === workoutName)
    return workout
  }
  return (
    <div className='App'>
      {/* <section className='login-section'> */}
      {/* <Login setUser={setUser} /> */}
      {/* </section> */}
      <h1 className='title'>GREEK GOD BOD</h1>
      <div className='components'>
          <Routes>
           <Route path="/" element={<Login replace to="/login" setUser={setUser} />} />
            {/* <Route exact path='/login' element={<Login setUser={setUser} />} /> */}
            <Route path='/dashboard/user/:id'  element={<Dashboard currentUser={currentUser}/>} />
            <Route path='/createworkout/user/:id' element={<CreateWorkoutForm allExercises={allExercises} currentUser={currentUser} addWorkout={addWorkout}/>} />
            <Route path='/suggestedworkouts/user/:id' element={<SuggestedWorkouts />} />
            <Route path='/pastworkouts/user/:id' element={<PastWorkouts createdWorkouts={createdWorkouts}/>} />
            <Route path='/social/user/:id' element={<Social />} />
            <Route path='/doworkout/user/:id/:name' element={<DoWorkout oneWorkout={findWorkout}/>} />
          </Routes>
      </div>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
