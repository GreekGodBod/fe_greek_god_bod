import './Social.css'
import ChatBox from '../ChatBox/ChatBox'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Social = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.getPastWorkouts(id).then((data) => props.setPastWorkouts(data))
    props.setCurrentUser(id)
  }, [])

  return (
    <div className='social-page'>
      <div className='header-social'>
        <div className='back-to-dashboard'>
          <button
            className='back-to-dashboard-button'
            onClick={props.backToDash}
          >
            Back to Dashboard
          </button>
        </div>
        <h1 className='page-title'>Social</h1>
        <div className='spacer'></div>
      </div>
      <div className='social-container'>
        <div className='chatbox'>
          <ChatBox
            username={props.username}
            users={props.users}
            fetchChat={props.fetchChat}
          />
        </div>
      </div>
    </div>
  )
}

export default Social
