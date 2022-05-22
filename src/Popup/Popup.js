import './Popup.css'
import { useNavigate } from 'react-router-dom'

const Popup = ({ closePopup, directWorkouts }) => {
  const navigate = useNavigate()

  // const directWorkouts = () => {
  //   navigate(`/pastworkouts/${currentUser}`)
  // }

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={closePopup}>
          x
        </span>
        <p className='created-notification'>Your workout has been added!</p>
        <button className='see-my-workout' onClick={directWorkouts}>
          See my workout
        </button>
        <button className='make-another' onClick={closePopup}>
          Make another workout
        </button>
      </div>
    </div>
  )
}

export default Popup
