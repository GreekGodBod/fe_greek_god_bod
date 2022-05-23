import './Popup.css'

const Popup = ({
  closePopup,
  directWorkouts,
  currentUser,
  closeSuggestedPopup
}) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <p className='created-notification'>Your workout has been added!</p>
        <div className='popup-button-container'>
          <button
            className='see-my-workout popup-button'
            onClick={directWorkouts}
          >
            See my workout
          </button>
          {window.location.href === `/suggestedworkouts/user/${currentUser}` ? (
            <button className='make-another popup-button' onClick={closePopup}>
              Make another workout
            </button>
          ) : (
            <button
              className='close popup-button'
              onClick={closeSuggestedPopup}
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
