import Exercise from '../Exercise/Exercise'
import { useNavigate } from 'react-router-dom'
import './DoWorkout.css'

const DoWorkout = (props) => {
  const navigate = useNavigate()

  let exercises = props.oneWorkout.exercises.map((exercise) => {
    return (
      <Exercise
        key={exercise.id}
        exercise={exercise}
        id={props.oneWorkout.id}
      />
    )
  })

  const navigateMyWorkouts = () => {
    navigate(`/myworkouts/user/${props.currentUser}`)
  }

  return (
    <div className='do-workout-page'>
      <section className='header-create-workout'>
        <div className='back-to-dashboard'>
          <button
            className='back-to-dashboard-button'
            onClick={navigateMyWorkouts}
          >
            Back to My Workouts
          </button>
        </div>
        <h1 className='page-title'>{props.oneWorkout.name}</h1>
        <div className='spacer'></div>
      </section>
      <section className='do-workout-container'>{exercises}</section>
    </div>
  )
}

export default DoWorkout
