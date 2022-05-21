import './Dashboard.css'
import profPic from '../images/lifter-pic.jpg'
import { useNavigate } from 'react-router-dom'


const Dashboard = ({currentUser}) => {
  console.log("dash",currentUser)
  const navigate = useNavigate()
  const navigateCreateWorkout = () => {
    navigate(`/createworkout/user/${currentUser}`)
  }

  const navigatePastWorkouts = () => {
    navigate(`/pastworkouts/user/${currentUser}`)
  }

  const navigateSuggestedWorkouts = () => {
    navigate(`/suggestedworkouts/user/${currentUser}`)
  }

  const navigateSocial = () => {
    navigate(`/social/user/${currentUser}`)
  }

  return (
    <section className='dashboard'>
      <div className='welcome-buttons-container'>
        <h1 className='welcome-message'>Welcome, User!</h1>
        <section className='button-container '>
          <button className='social-button dash-button' onClick={navigateSocial}>Social</button>
          <button className='create-workout-button dash-button' onClick={navigateCreateWorkout}>
            Create Workout
          </button>
          <button className='suggested-button dash-button' onClick={navigateSuggestedWorkouts}>
            Suggested Workouts
          </button>
          <button className='past-workout-button dash-button' onClick={navigatePastWorkouts}>
            Past Workouts
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
