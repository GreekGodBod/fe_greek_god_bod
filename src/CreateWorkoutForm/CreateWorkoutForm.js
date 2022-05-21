import './CreateWorkoutForm.css'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateWorkoutForm = (props) => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])
  const [added, setAdded] = useState([])
  const navigate = useNavigate()

  const addExercise = (newExercise) => {
    setExercises([...exercises, newExercise])
  }
  const submitNewWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      // id: Date.now(),
      name: name,
      exercises: exercises
    }
    console.log(newWorkout)
    props.addWorkout(newWorkout)
    setAdded('Your workout was added!!')
    setTimeout(() => clearInputs(), 3000)
  }

  const clearInputs = () => {
    setName('')
    setExercises([])
    setAdded('')
  }

  let allExercises

  if (exercises[0]) {
    allExercises = exercises.map((exercise) => {
      return <Exercise key={exercise.id} exercise={exercise} />
    })
  }

  const backToDash = () => {
    navigate(`/dashboard/user/${props.currentUser}`)
  }

  return (
    <div className='create-workout-page'>
      <section className='header'>
        <div className='back-to-dashboard'>
          <button className='back-to-dashboard-button' onClick={backToDash}>
            Back
          </button>
        </div>
        <h1 className='page-title'>Create Your Workout</h1>
        <div className='spacer'></div>
      </section>
      <form onSubmit={(e) => submitNewWorkout(e)}>
        <div className='add-workout-container'>
          <input
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Workout Name'
            required
          />

          {name ? (
            <button className='add-workout-button'>Add Workout</button>
          ) : (
            <button className='disabled' disabled>
              Add Workout
            </button>
          )}
        </div>
      </form>
      <p className='begin-text'>
        Click the exercises below to add to your workout!
      </p>
      <div className='form-container'>
        <ExerciseForm
          addedExercises={exercises}
          allExercises={props.allExercises}
          addExercise={addExercise}
        />
      </div>
    </div>
  )
}

export default CreateWorkoutForm
