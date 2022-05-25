import './App.css'
import {
  newExercises,
  getPastWorkouts,
  getSuggestedWorkouts,
  postCreatedWorkout,
  patchWorkout,
  fetchChat,
  fetchUsers
} from '../apiCalls'
import Login from '../Login/Login'
import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import CreateWorkoutForm from '../CreateWorkoutForm/CreateWorkoutForm'
import MyWorkouts from '../MyWorkouts/MyWorkouts'
import Social from '../Social/Social'
import SuggestedWorkouts from '../SuggestedWorkouts/SuggestedWorkouts'
import DoWorkout from '../DoWorkout/DoWorkout'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])
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
    getPastWorkouts(currentUser).then((data) => setPastWorkouts(data))
    newExercises().then((data) => setAllExercises(data))
    setTheSuggestedWorkout()
    fetchUsers().then((data) => setUsers(data))
  }, [])

  const addWorkout = (newWorkout) => {
    console.log(JSON.stringify(newWorkout))
    postCreatedWorkout(newWorkout)
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
    const workout = pastworkouts.workouts.find(
      (workout) => workout.name === workoutName
    )
    setOneWorkout(workout)
  }

  const openPopup = () => {
    setIsOpen(!isOpen)
  }

  const submitCompletedWorkout = (workout) => {
    patchWorkout(workout, currentUser).then((data) => console.log(data))
  }

  // const getMessages = () => {
  //   fetchChat()
  // }

  return (
    <div className='App'>
      <div className='components'>
        <Routes>
          <Route
            path='/'
            element={
              <Login
                replace
                to='/login'
                setUsername={setUsername}
                setUser={setUser}
              />
            }
          />
          <Route
            path='/dashboard/user/:id'
            element={
              <Dashboard
                currentUser={currentUser}
                getPastWorkouts={getPastWorkouts}
                setPastWorkouts={setPastWorkouts}
                setCurrentUser={setCurrentUser}
                setUsername={setUsername}
                fetchUsers={fetchUsers}
              />
            }
          />
          <Route
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
                getPastWorkouts={getPastWorkouts}
                setPastWorkouts={setPastWorkouts}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path='/suggestedworkouts/user/:id'
            element={
              <SuggestedWorkouts
                suggestedWorkout={suggestedWorkout}
                backToDash={backToDash}
                addWorkout={addWorkout}
                openPopup={openPopup}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                getPastWorkouts={getPastWorkouts}
                setPastWorkouts={setPastWorkouts}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                getSuggestedWorkouts={getSuggestedWorkouts}
                setSuggestedWorkout={setSuggestedWorkout}
              />
            }
          />
          <Route
            path='/myworkouts/user/:id'
            element={
              <MyWorkouts
                createdWorkouts={createdWorkouts}
                backToDash={backToDash}
                currentUser={currentUser}
                findWorkout={findWorkout}
                getPastWorkouts={getPastWorkouts}
                setPastWorkouts={setPastWorkouts}
                setCurrentUser={setCurrentUser}
                pastWorkouts={pastworkouts}
              />
            }
          />
          <Route
            path='/social/user/:id'
            element={
              <Social
                getPastWorkouts={getPastWorkouts}
                setCurrentUser={setCurrentUser}
                setPastWorkouts={setPastWorkouts}
                username={username}
                users={users}
                backToDash={backToDash}
                // getMessages={getMessages}
                fetchChat={fetchChat}
              />
            }
          />
          <Route
            path='/doworkout/:name/user/:id/'
            element={
              <DoWorkout
                oneWorkout={oneWorkout}
                currentUser={currentUser}
                findWorkout={findWorkout}
                submitCompletedWorkout={submitCompletedWorkout}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
