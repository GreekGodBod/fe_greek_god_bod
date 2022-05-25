import './Popup.css'

const Popup = (props) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <p className='created-notification'>Your workout has been added!</p>
        <div className='popup-button-container'>
          <button
            className='see-my-workout popup-button'
            onClick={props.directWorkouts}
          >
            See my workout
          </button>
          {window.location.pathname ==
          `/createworkout/user/${props.currentUser}` ? (
            <button
              className='make-another popup-button'
              onClick={props.closePopup}
            >
              Make another workout
            </button>
          ) : (
            <button
              className='close popup-button'
              onClick={props.closeSuggestedPopup}
            >
              Okay
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Popup
