import './PastWorkouts.css'
import Workout from '../Workout/Workout'
import { useNavigate } from 'react-router-dom'

const PastWorkouts = ({createdWorkouts}) => {
  let workouts;
  if (createdWorkouts) {
    workouts = createdWorkouts.map(workout => {
        return <Workout key={workout.name} workout={workout}/>
    })
}

  return (
    <div className='past-workouts-page'>
      <div className='past-workouts-container'>
        <h1 className='page-title'>Past Workouts</h1>
      </div>
    </div>
  )
}

export default PastWorkouts
