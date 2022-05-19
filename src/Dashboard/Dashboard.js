import './Dashboard.css'
import profPic from '../images/lifter-pic.jpg'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/createworkout')
  }

  return (
    <section className='dashboard'>
      <div className='welcome-buttons-container'>
        <h1 className='welcome-message'>Welcome, User!</h1>
        <section className='button-container '>
          <button className='social-button dash-button'>Social</button>
          <button className='create-workout-button dash-button' onClick={handleClick}>
            Create Workout
          </button>
          <button className='suggested-button dash-button'>
            Suggested Workouts
          </button>
          <button className='past-workout-button dash-button'>
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
