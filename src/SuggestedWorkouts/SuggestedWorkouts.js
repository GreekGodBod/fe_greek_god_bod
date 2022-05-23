import './SuggestedWorkouts.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SuggestedWorkouts = ({
  suggestedWorkout,
  backToDash,
  addWorkout,
  openPopup,
  currentUser,
  getPastWorkouts,
  setCurrentUser,
  setPastWorkouts,
  getSuggestedWorkouts,
  setSuggestedWorkout
}) => {
  const { id } = useParams()
  console.log('suggested', suggestedWorkout)

  useEffect(() => {
    getSuggestedWorkouts().then((data) => setSuggestedWorkout(data))
    getPastWorkouts(id).then((data) => setPastWorkouts(data))
    setCurrentUser(id)
    console.log('suggested', suggestedWorkout)
  }, [])

  console.log(suggestedWorkout)

  const submitNewWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      id: currentUser,
      name: suggestedWorkout.data.name,
      exercises: suggestedWorkout.data.exercises
    }
    console.log(newWorkout)
    addWorkout(newWorkout)
    openPopup()
  }

  if (suggestedWorkout) {
    // not sure what is happening here... for some reason it skips the if statement and errors on "attributes are undefined" line 51 which means it can't find the data (it should say loading) and doesn't run the useEffect
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
            Today's suggested workout is '{suggestedWorkout.data.name}
            '!
          </h2>
          {suggestedWorkout.data.exercises.map((exercise) => {
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
        <button className='add-suggested-workout' onClick={submitNewWorkout}>
          Add to My Workouts
        </button>
        {/* {props.isOpen && (
          <Popup closePopup={closePopup} directWorkouts={directWorkouts} />
        )} */}
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default SuggestedWorkouts
