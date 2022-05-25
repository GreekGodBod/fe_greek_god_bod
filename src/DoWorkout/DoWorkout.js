import Exercise from '../Exercise/Exercise'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './DoWorkout.css'

const DoWorkout = (props) => {
  const [allSets, setAllSets] = useState([])
  const navigate = useNavigate()

  const { name } = useParams()

  useEffect(() => {
    props.findWorkout(name)
  }, [])

  if (props.oneWorkout.exercises) {
    let sets
    const addCompletedWorkout = () => {
      props.oneWorkout.exercises.forEach((exercise) => {
        sets = allSets.filter((set) => set.workout_exercise_id === exercise.id)
        sets.forEach((set) => exercise.intervals.push(set))
      })
      props.submitCompletedWorkout(props.oneWorkout)
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
        <button
          className='complete-workout-button'
          onClick={addCompletedWorkout}
        >
          Complete Workout
        </button>
      </div>
    )
  } else return <h1>Loading..</h1>
}

export default DoWorkout
