import './CreateWorkoutForm.css'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateWorkoutForm = (props) => {
  const [title, setTitle] = useState('')
  const [exercises, setExercises] = useState([])
  const [added, setAdded] = useState([])

  const addExercise = (newExercise) => {
    // this.setState({ exercises: [...this.state.exercises, newExercise] })
  }
  const submitNewWorkout = e => {
    e.preventDefault()
    const newWorkout = {
      id: Date.now(),
      ...this.state
    }
    //   this.props.addWorkout(newWorkout)
    //   setAdded("Your workout was added!!")  
    //   setTimeout(() => this.clearInputs(), 3000)
    // }

    const clearInputs = () => {
      this.setState({
        title: '',
        exercises: [],
        added: ''
      })
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
        </div>
        <section className='workout-form' >
          <NavLink to='/home'><button>View Your Workouts</button></NavLink>
          {added ? <h1 className='added'>{added}</h1> : <h1>Create a new Workout!</h1>}
          {added ? "" : <section className='exercises-workout-form'>
            {allExercises}
          </section>}
          <form onSubmit={(e) => submitNewWorkout(e)}>
            {exercises[0] ?
              <input
                name="title"
                value={title}
                // onChange={e => changeHandler(e)}
                placeholder="Workout Name"
                required
              />
              : ""}
            {title ? <button>Add Workout</button> : ''}
          </form>
          <p>Begin by Adding Exercises below</p>
          <ExerciseForm addedExercises={exercises} allExercises={props.allExercises} addExercise={addExercise} />
        </section >
      </div>
    )
  }
}

export default CreateWorkoutForm
