import './PastWorkouts.css'
import Workout from '../Workout/Workout'
import { useNavigate } from 'react-router-dom'

const PastWorkouts = ({createdWorkouts, currentUser, backToDash, findWorkout}) => {
  let workouts;
  if (createdWorkouts) {
    workouts = createdWorkouts.map(workout => {
        return <Workout key={workout.name} findWorkout={findWorkout} currentUser={currentUser} workout={workout} />
    })
  }

  return (
    <div className='past-workouts-page'>
      <div className='header-past-workouts'>
        <div className='back-to-dashboard'>
          <button className='back-to-dashboard-button' onClick={backToDash}>
            Back
          </button>
        </div>
        <h1 className='page-title'>Past Workouts</h1>
        <div className='spacer'></div>
      </div>
      <div className='past-workouts-container'>{workouts}</div>
    </div>
  )
}

export default PastWorkouts
