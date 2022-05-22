import './Popup.css'

const Popup = ({ closePopup, directWorkouts }) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        {/* <span className='close-icon' onClick={closePopup}>
          x
        </span> */}
        <p className='created-notification'>Your workout has been added!</p>
        <div className='popup-button-container'>
          <button
            className='see-my-workout popup-button'
            onClick={directWorkouts}
          >
            See my workout
          </button>
          <button className='make-another popup-button' onClick={closePopup}>
            Make another workout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
