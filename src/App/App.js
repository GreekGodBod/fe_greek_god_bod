import './App.css'
import {
  newExercises,
  getPastWorkouts,
  getSuggestedWorkouts,
  postCreatedWorkout
} from '../apiCalls'
import Login from '../Login/Login'
import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import CreateWorkoutForm from '../CreateWorkoutForm/CreateWorkoutForm'
import MyWorkouts from '../MyWorkouts/MyWorkouts'
import Social from '../Social/Social'
import SuggestedWorkouts from '../SuggestedWorkouts/SuggestedWorkouts'
import DoWorkout from '../DoWorkout/DoWorkout'
import { Routes, Route, Redirect, Switch, useNavigate } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [pastworkouts, setPastWorkouts] = useState([])
  const [suggestedWorkout, setSuggestedWorkout] = useState({})
  const [allExercises, setAllExercises] = useState([])
  const [createdWorkouts, setCreatedWorkouts] = useState([])
  const [oneWorkout, setOneWorkout] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    newExercises().then((data) => setAllExercises(data))
    setTheSuggestedWorkout()
  }, [])

  const addWorkout = (newWorkout) => {
    // postCreatedWorkout(newWorkout)
    // .then(data => console.log("post",data))
    setCreatedWorkouts([...createdWorkouts, newWorkout])
  }

  const setUser = (userId) => {
    setCurrentUser(userId)
    getPastWorkouts(userId).then((data) => setPastWorkouts(data))
  }

  const setTheSuggestedWorkout = () => {
    getSuggestedWorkouts().then((data) => setSuggestedWorkout(data))
  }

  const backToDash = () => {
    navigate(`/dashboard/user/${currentUser}`)
  }

  const findWorkout = (workoutName) => {
    const workout = createdWorkouts.find(
      (workout) => workout.name === workoutName
    )
    setOneWorkout(workout)
  }

  const openPopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='App'>
      {/* <section className='login-section'> */}
      {/* <Login setUser={setUser} /> */}
      {/* </section> */}

      <div className='components'>
        <Routes>
          <Route
            path='/'
            element={<Login replace to='/login' setUsername={setUsername} setUser={setUser} />}
          />
          {/* <Route exact path='/login' element={<Login setUser={setUser} />} /> */}
          <Route
            exact
            path='/dashboard/user/:id'
            element={<Dashboard username={username} currentUser={currentUser} />}
          />
          <Route
            exact
            path='/createworkout/user/:id'
            element={
              <CreateWorkoutForm
                allExercises={allExercises}
                currentUser={currentUser}
                addWorkout={addWorkout}
                backToDash={backToDash}
                openPopup={openPopup}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            }
          />
          <Route
            exact
            path='/suggestedworkouts/user/:id'
            element={
              <SuggestedWorkouts
                suggestedWorkout={suggestedWorkout}
                backToDash={backToDash}
                addWorkout={addWorkout}
                openPopup={openPopup}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            }
          />
          <Route
            exact
            path='/myworkouts/user/:id'
            element={
              <MyWorkouts
                createdWorkouts={createdWorkouts}
                backToDash={backToDash}
                currentUser={currentUser}
                findWorkout={findWorkout}
              />
            }
          />
          <Route exact path='/social/user/:id' element={<Social />} />
          <Route
            path='/doworkout/:name/user/:id/'
            element={
              <DoWorkout oneWorkout={oneWorkout} currentUser={currentUser} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
