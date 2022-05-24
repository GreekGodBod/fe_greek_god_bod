import './MyWorkouts.css'
import Workout from '../Workout/Workout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MyWorkouts = ({
  createdWorkouts,
  currentUser,
  backToDash,
  findWorkout,
  getPastWorkouts,
  setPastWorkouts,
  setCurrentUser,
  pastWorkouts
}) => {
  const { id } = useParams()

  useEffect(() => {
    getPastWorkouts(id).then((data) => setPastWorkouts(data))
    setCurrentUser(id)
  }, [])
console.log(pastWorkouts)
  let workouts

  if (pastWorkouts.workouts) {
  workouts = pastWorkouts.workouts.map((workout) => {
    return (
      <Workout
        key={workout.name}
        findWorkout={findWorkout}
        currentUser={currentUser}
        workout={workout}
      />
    )
  })

  
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
  } else return <h1>Loading</h1>

}

export default MyWorkouts
