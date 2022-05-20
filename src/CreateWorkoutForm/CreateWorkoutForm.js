import './CreateWorkoutForm.css'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import { useState } from 'react'

const CreateWorkoutForm = (props) => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])
  const [added, setAdded] = useState([])

  const addExercise = (newExercise) => {
    setExercises([...exercises, newExercise])  
  }
  const submitNewWorkout = e => {
    e.preventDefault()
    const newWorkout = {
      id: Date.now(),
      name: name,
      exercises: exercises
    }
      props.addWorkout(newWorkout)
      setAdded("Your workout was added!!")  
      setTimeout(() => clearInputs(), 3000)
    }

    const clearInputs = () => {
      setName('')
      setExercises([])
      setAdded('')
    }

    let allExercises;
    
    if (exercises[0]) {
      allExercises = exercises.map(exercise => {
        return <Exercise key={exercise.id} exercise={exercise} />
      })
    }
    
    return (
      <div className='create-workout-page'>
        <div className='form-container'>
          <h1 className='page-title'>Create Your Own Workout</h1>
          {<h1 className='added'>{added}</h1>}
          {exercises[0] ? <section className='exercises-workout-form'>
            {allExercises}
          </section> : "" }
          <form onSubmit={(e) => submitNewWorkout(e)}>
            {exercises[0] ?
              <input
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Workout Name"
                required
              />
              : ""}
            {name ? <button>Add Workout</button> : ''}
          </form>
          <p>Begin by Adding Exercises below</p>
          <ExerciseForm addedExercises={exercises} allExercises={props.allExercises} addExercise={addExercise} />
        
        </div>
        
      </div>
    )
  }


export default CreateWorkoutForm
