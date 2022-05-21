import './SuggestedWorkouts.css'
import { useNavigate } from 'react-router-dom'

const SuggestedWorkouts = ({suggestedWorkout}) => {
  return (
    <div className='suggested-workouts-page'>
      <div className='suggested-workouts-container'>
        <h1 className='page-title'>Suggested Workout</h1>
        <h2>Welcome! Give '{suggestedWorkout.data.attributes.name}' a try:</h2>
        {suggestedWorkout.data.attributes.exercises.map(exercise => {
          return (
            <div className='suggested-workout-card' key={exercise.id}>
              <h3>{exercise.name}</h3>
              <img src={exercise.gif} alt='exercise gif' className='suggestedGif'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SuggestedWorkouts
