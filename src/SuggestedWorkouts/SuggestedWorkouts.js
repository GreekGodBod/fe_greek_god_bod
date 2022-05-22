import './SuggestedWorkouts.css'
import { useNavigate } from 'react-router-dom'

const SuggestedWorkouts = ({
  suggestedWorkout,
  backToDash,
  addWorkout,
  openPopup,
  isOpen,
  setIsOpen
}) => {
  // const submitNewWorkout = (e) => {
  //   e.preventDefault()
  //   console.log(suggestedWorkout)
  //   addWorkout(suggestedWorkout)
  //   openPopup()
  // }

  return (
    <div className='suggested-workouts-page'>
      <div className='header-suggested-workouts'>
        <div className='back-to-dashboard'>
          <button className='back-to-dashboard-button' onClick={backToDash}>
            Back to Dashboard
          </button>
        </div>
        <h1 className='page-title'>Suggested Workouts</h1>
        <div className='spacer'></div>
      </div>
      <div className='suggested-workouts-container'>
        <h2 className='suggested-workout-message'>
          Today's suggested workout is '{suggestedWorkout.data.attributes.name}
          '!
        </h2>
        {suggestedWorkout.data.attributes.exercises.map((exercise) => {
          return (
            <div className='suggested-workout-container' key={exercise.id}>
              <img
                src={exercise.gif}
                alt='exercise gif'
                className='suggested-gif'
              />
              <div className='name-container'>
                <h3>{exercise.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
      {/* <button className='add-suggested-workout' onClick={submitNewWorkout}>
        Add to My Workouts
      </button> 
      This functionality isn't working because suggested workout object is in different format as created workout object*/}
    </div>
  )
}

export default SuggestedWorkouts
