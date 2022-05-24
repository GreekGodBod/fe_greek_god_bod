import Exercise from '../Exercise/Exercise'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './DoWorkout.css'

const DoWorkout = (props) => {
    const [allSets, setAllSets] = useState([])
    const navigate = useNavigate()
    console.log(allSets)
    

    //find the right exercise with .find? and then
    //excerise.intervals.push(newSet) with reps and weight_lbs
    //send the oneWorkout with the intervals in the patch 
    


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
        </div>
    )
}

export default DoWorkout
