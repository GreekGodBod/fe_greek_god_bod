import Exercise from '../Exercise/Exercise'
import './Workout.css'
import { useNavigate, useParams } from 'react-router-dom'

const Workout = (props) => {
  let { name } = useParams()

  const navigate = useNavigate()
  let exercises

  if (props.workout) {
    exercises = props.workout.exercises.map((exercise) => {
      return (
        <Exercise
          key={exercise.id}
          workoutName={props.workout.name}
          currentUser={props.currentUser}
          //   id={props.workout.id}
          exercise={exercise}
        />
      )
    })
  }
  const startWorkout = (workoutName) => {
    props.findWorkout(workoutName)
    navigate(`/doworkout/${workoutName}/user/${props.currentUser}`)
  }

  return (
    <section className='workout'>
      <h1 className='workout-name'>{props.workout.name}</h1>
      <button
        className='start-workout-button'
        onClick={() => startWorkout(props.workout.name)}
      >
        Start Workout
      </button>
    </section>
  )
}

export default Workout
