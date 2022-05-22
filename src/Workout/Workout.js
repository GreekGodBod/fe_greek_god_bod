import Exercise from '../Exercise/Exercise'
import './Workout.css'
import { useNavigate, useParams } from 'react-router-dom'

const Workout = ({ workout, deleteWorkout, currentUser }) => {
    let { name } = useParams()

    const navigate = useNavigate()
    let exercises

    if (workout) {
        exercises = workout.exercises.map((exercise) => {
            return <Exercise key={exercise.id} id={workout.id} exercise={exercise} />
        })
    }


    const startWorkout = (workoutName) => {
        // findWorkout(name)
        navigate(`/doworkout/${workoutName}/user/${currentUser}`)
    }

    return (
        <section className='workout'>
            <h1>{workout.name}</h1>
            {exercises}
            <button
                className='start-workout-button'
                onClick={() => startWorkout(workout.name)}
            >
                Start Workout
            </button>
        </section>
    )
}

export default Workout
