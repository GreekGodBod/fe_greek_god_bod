import Exercise from "../Exercise/Exercise";
import './Workout.css'

const Workout = ({ workout, deleteWorkout }) => {
    let exercises;

    if (workout) {
        exercises = workout.exercises.map(exercise => {
            return <Exercise key={exercise.id} id={workout.id} exercise={exercise} />
        })
    }

    return (
        <section className="workout">
            <h1>{workout.name}</h1>
            {exercises}
            <button className='start-workout-button'>Start Workout</button>
        </section>
    )
}

export default Workout