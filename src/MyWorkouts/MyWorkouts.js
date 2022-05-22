import './MyWorkouts.css'
import Workout from '../Workout/Workout'
import { useNavigate } from 'react-router-dom'

const MyWorkouts = ({
  createdWorkouts,
  currentUser,
  backToDash,
  findWorkout
}) => {
  let workouts
  if (createdWorkouts) {
    workouts = createdWorkouts.map((workout) => {
      return (
        <Workout
          key={workout.name}
          findWorkout={findWorkout}
          currentUser={currentUser}
          workout={workout}
        />
      )
    })
  }

  return (
    <div className='my-workouts-page'>
      <div className='header-my-workouts'>
        <div className='back-to-dashboard'>
          <button className='back-to-dashboard-button' onClick={backToDash}>
            Back to Dashboard
          </button>
        </div>
        <h1 className='page-title'>My Workouts</h1>
        <div className='spacer'></div>
      </div>
      <div className='my-workouts-container'>{workouts}</div>
    </div>
  )
}

export default MyWorkouts
