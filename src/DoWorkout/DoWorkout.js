import Exercise from "../Exercise/Exercise"
import { useNavigate } from 'react-router-dom'
import "./DoWorkout.css"

const DoWorkout = (props) => {
    const navigate = useNavigate()
        let exercises = props.oneWorkout.exercises.map(exercise => {
            return (
                <Exercise key={exercise.id} exercise={exercise} id={props.oneWorkout.id} />
            )
        })

        const navigation = () => {
            navigate(`/dashboard/user/${props.currentUser}`)
        }
        return (
            <section>
                <button onClick={navigation}>Home</button >
                <h1>{props.oneWorkout.title}</h1>
                <section className="do-workout-exercises" >
                    {exercises}
                </section>
            </section>
        )
    
}

export default DoWorkout