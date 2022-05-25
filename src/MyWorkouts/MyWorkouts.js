import './MyWorkouts.css'
import Workout from '../Workout/Workout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MyWorkouts = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.getPastWorkouts(id).then((data) => props.setPastWorkouts(data))
    props.setCurrentUser(id)
  }, [])

  let workouts

  if (props.pastWorkouts.workouts) {
    workouts = props.pastWorkouts.workouts.map((workout) => {
      return (
        <Workout
          key={workout.name}
          findWorkout={props.findWorkout}
          currentUser={props.currentUser}
          workout={workout}
        />
      )
    })

    return (
      <div className='my-workouts-page'>
        <div className='header-my-workouts'>
          <div className='back-to-dashboard'>
            <button
              className='back-to-dashboard-button'
              onClick={props.backToDash}
            >
              Back to Dashboard
            </button>
          </div>
          <h1 className='page-title'>My Workouts</h1>
          <div className='spacer'></div>
        </div>
        <div className='my-workouts-container'>{workouts}</div>
      </div>
    )
  } else return <h1>Loading</h1>
}

export default MyWorkouts
