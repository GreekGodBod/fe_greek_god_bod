import Exercise from "../Exercise/Exercise"
import "./DoWorkout.css"

const DoWorkout = (props) => {
   
        let exercises = props.oneWorkout.exercises.map(exercise => {
            return (
                <Exercise key={exercise.id} exercise={exercise} id={props.oneWorkout.id} />
            )
        })

        return (
            <section>
                <button>Home</button>
                <h1>{props.oneWorkout.title}</h1>
                <section className="do-workout-exercises" >
                    {exercises}
                </section>
            </section>
        )
    
}

export default DoWorkout