import './CreateWorkoutForm.css'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import Popup from '../Popup/Popup'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreateWorkoutForm = (props) => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])
  const [added, setAdded] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    props.getPastWorkouts(id).then((data) => props.setPastWorkouts(data))
    props.setCurrentUser(id)
  }, [])

  const directWorkouts = () => {
    closePopup()
    navigate(`/myworkouts/user/${props.currentUser}`)
  }

  const addExercise = (newExercise) => {
    setExercises([...exercises, newExercise])
  }

  const submitNewWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      id: props.currentUser,
      name: name,
      exercises: exercises
    }
    props.addWorkout(newWorkout)
    props.openPopup()
  }

  const closePopup = () => {
    props.openPopup()
    clearInputs()
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

  return (
    <div className='create-workout-page'>
      <section className='header-create-workout'>
        <div className='back-to-dashboard'>
          <button
            className='back-to-dashboard-button'
            onClick={props.backToDash}
          >
            Back to Dashboard
          </button>
        </div>
        <h1 className='page-title'>Create Your Workout</h1>
        <div className='spacer'></div>
      </section>
      <p className='begin-text'>
        Select a muscle group, then click on exercises to add!
      </p>
      <div className='form-container'>
        <ExerciseForm
          addedExercises={exercises}
          allExercises={props.allExercises}
          addExercise={addExercise}
        />
      </div>
      {exercises.length !== 0 && (
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
              <button className='add-workout-button disabled' disabled>
                Add Workout
              </button>
            )}
          </div>
        </form>
      )}
      {props.isOpen && (
        <Popup
          closePopup={closePopup}
          directWorkouts={directWorkouts}
          currentUser={props.currentUser}
        />
      )}
    </div>
  )
}

export default CreateWorkoutForm
