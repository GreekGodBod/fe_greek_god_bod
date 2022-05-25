import './Dashboard.css'
import profPic from '../images/lifter-pic.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Dashboard = ({
  currentUser,
  getPastWorkouts,
  setPastWorkouts,
  setCurrentUser,
  fetchUsers
}) => {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()
  const { id } = useParams()

  let user
  if (users[0]) {
    user = users.find((user) => user.id == id)
  }

  const navigateCreateWorkout = () => {
    navigate(`/createworkout/user/${currentUser}`)
  }

  const navigateMyWorkouts = () => {
    navigate(`/myworkouts/user/${currentUser}`)
  }

  const navigateSuggestedWorkouts = () => {
    navigate(`/suggestedworkouts/user/${currentUser}`)
  }

  const navigateSocial = () => {
    navigate(`/social/user/${currentUser}`)
  }

  const logout = () => {
    navigate('/')
    setCurrentUser('')
  }

  useEffect(() => {
    getPastWorkouts(id).then((data) => setPastWorkouts(data))
    setCurrentUser(id)
    fetchUsers().then((data) => setUsers(data))
  }, [])

  return (
    <section className='dashboard'>
      <div className='welcome-buttons-container'>
<<<<<<< HEAD
        <button className='logout-button' onClick={logout}>Logout</button>
=======
        <button className='logout-button' onClick={logout}>
          Logout
        </button>
>>>>>>> 2d0b387dd4977d741c1c203551b30f08a63af5fa
        {user && <h1 className='welcome-message'>Welcome, {user.name}</h1>}
        <section className='button-container '>
          <button
            className='social-button dash-button'
            onClick={navigateSocial}
          >
            Social
          </button>
          <button
            className='create-workout-button dash-button'
            onClick={navigateCreateWorkout}
          >
            Create Workout
          </button>
          <button
            className='suggested-button dash-button'
            onClick={navigateSuggestedWorkouts}
          >
            Suggested Workouts
          </button>
          <button
            className='my-workout-button dash-button'
            onClick={navigateMyWorkouts}
          >
            My Workouts
          </button>
        </section>
      </div>
      <div className='img-container'>
        <img src={profPic} className='profile-pic' alt='user-prof-pic' />
      </div>
    </section>
  )
}

export default Dashboard
