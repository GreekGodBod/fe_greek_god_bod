import Exercise from '../Exercise/Exercise'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './DoWorkout.css'

const DoWorkout = (props) => {
    const [allSets, setAllSets] = useState([])
    const navigate = useNavigate()
    
    console.log(props.oneWorkout.workout_instance[0].intervals)
    let sets;
    const addCompletedWorkout = () => {
        props.oneWorkout.exercises.forEach(exercise => {
            sets = allSets.filter(set => set.id === exercise.name)
            props.oneWorkout.workout_instance[0].intervals.push(sets)
            //once data is changed "workout_instance will need to be "exercise"
            console.log('sets',sets)
        })
        console.log("allsets", allSets)
        console.log(props.oneWorkout)
        // props.submitCompletedWorkout(newWorkout)
    }

    let exercises = props.oneWorkout.exercises.map((exercise) => {
        return (
            <Exercise
                key={exercise.id}
                exercise={exercise}
                id={props.oneWorkout.id}
                setAllSets={setAllSets}
                allSets={allSets}
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
            <button onClick={addCompletedWorkout}>Complete Workout</button>
        </div>
    )
}

export default DoWorkout
