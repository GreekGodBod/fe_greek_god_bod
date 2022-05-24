import './SuggestedWorkouts.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Popup from '../Popup/Popup'

const SuggestedWorkouts = ({
  suggestedWorkout,
  backToDash,
  addWorkout,
  openPopup,
  isOpen,
  setIsOpen,
  currentUser,
  getPastWorkouts,
  setCurrentUser,
  setPastWorkouts,
  getSuggestedWorkouts,
  setSuggestedWorkout
}) => {
  const navigate = useNavigate()

  const { id } = useParams()
  console.log('suggested', suggestedWorkout)

  useEffect(() => {
    getSuggestedWorkouts().then((data) => setSuggestedWorkout(data))
    getPastWorkouts(id).then((data) => setPastWorkouts(data))
    setCurrentUser(id)
    console.log('suggested', suggestedWorkout)
  }, [])


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

  const directWorkouts = () => {
    openPopup()
    navigate(`/myworkouts/user/${currentUser}`)
  }

  const closeSuggestedPopup = () => {
    setIsOpen(!isOpen)
  }

  if (suggestedWorkout.data) {
    
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
        {isOpen && (
          <Popup
            openPopup={openPopup}
            closeSuggestedPopup={closeSuggestedPopup}
            directWorkouts={directWorkouts}
            currentUser={currentUser}
          />
        )}
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default SuggestedWorkouts
