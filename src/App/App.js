import './App.css'
import { newExercises, getPastWorkouts } from '../apiCalls'
import Login from '../Login/Login'
import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import CreateWorkoutForm from '../CreateWorkoutForm/CreateWorkoutForm'
import PastWorkouts from '../PastWorkouts/PastWorkouts'
import Social from '../Social/Social'
import SuggestedWorkouts from '../SuggestedWorkouts/SuggestedWorkouts'
import { Routes, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [pastworkouts, setPastWorkouts] = useState([])
  const [suggestedWorkouts, setSuggestedWorkouts]= useState([])
  const [allExercises, setAllExercises] = useState([])
  const [createdWorkouts, setCreatedWorkouts] = useState([])

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
   console.log(currentUser)
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
            <Route exact path='/dashboard/user/:id'  element={<Dashboard currentUser={currentUser}/>} />
            <Route exact path='/createworkout/user/:id' element={<CreateWorkoutForm allExercises={allExercises} currentUser={currentUser} addWorkout={addWorkout}/>} />
            <Route exact path='/suggestedworkouts/user/:id' element={<SuggestedWorkouts />} />
            <Route exact path='/pastworkouts/user/:id' element={<PastWorkouts createdWorkouts={createdWorkouts}/>} />
            <Route exact path='/social/user/:id' element={<Social />} />
            {/* <Route exact path='/doworkout/:name' element={<DoWorkout oneWorkout={this.findWorkout(parseInt(match.params.id))}/>} /> */}
          </Routes>
      </div>
      {/* <Dashboard currentUser={currentUser} /> */}
    </div>
  )
}

export default App
