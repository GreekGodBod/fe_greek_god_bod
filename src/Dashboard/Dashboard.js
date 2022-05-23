import './Dashboard.css'
import profPic from '../images/lifter-pic.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = ({ currentUser, username, getPastWorkouts, setPastWorkouts, setCurrentUser, setUserName }) => {
  const navigate = useNavigate()
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
  const { id } = useParams()

  useEffect(() => {
    getPastWorkouts(id).then((data) => setPastWorkouts(data))
    setCurrentUser(id)
    // setUserName()
    
  }, [])
  console.log(id)

  return (
    <section className='dashboard'>
      <div className='welcome-buttons-container'>
        <h1 className='welcome-message'>Welcome, {username}</h1>
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
