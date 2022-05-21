import './Popup.css'

const Popup = ({ closePopup }) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={closePopup}>
          x
        </span>
        <p className='created-notification'>Your workout has been added!</p>
        <button className='see-my-workout'>See my workout</button>
        <button className='make-another' onClick={closePopup}>
          Make another workout
        </button>
      </div>
    </div>
  )
}

export default Popup
