import './SuggestedWorkouts.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Popup from '../Popup/Popup'

const SuggestedWorkouts = (props) => {
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    props.getSuggestedWorkouts().then((data) => props.setSuggestedWorkout(data))
    props.getPastWorkouts(id).then((data) => props.setPastWorkouts(data))
    props.setCurrentUser(id)
  }, [])

  const submitNewWorkout = (e) => {
    e.preventDefault()
    const newWorkout = {
      id: props.currentUser,
      name: props.suggestedWorkout.data.name,
      exercises: props.suggestedWorkout.data.exercises
    }
    props.addWorkout(newWorkout)
    props.openPopup()
  }

  const directWorkouts = () => {
    props.openPopup()
    navigate(`/myworkouts/user/${props.currentUser}`)
  }

  const closeSuggestedPopup = () => {
    props.setIsOpen(!props.isOpen)
  }

  if (props.suggestedWorkout.data) {
    return (
      <div className='suggested-workouts-page'>
        <div className='header-suggested-workouts'>
          <div className='back-to-dashboard'>
            <button
              className='back-to-dashboard-button'
              onClick={props.backToDash}
            >
              Back to Dashboard
            </button>
          </div>
          <h1 className='page-title'>Suggested Workouts</h1>
          <div className='spacer'></div>
        </div>
        <div className='suggested-workouts-container'>
          <h2 className='suggested-workout-message'>
            Today's suggested workout is '{props.suggestedWorkout.data.name}
            '!
          </h2>
          {props.suggestedWorkout.data.exercises.map((exercise) => {
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
        {props.isOpen && (
          <Popup
            openPopup={props.openPopup}
            closeSuggestedPopup={closeSuggestedPopup}
            directWorkouts={directWorkouts}
            currentUser={props.currentUser}
          />
        )}
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default SuggestedWorkouts
