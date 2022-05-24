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
      <div className='social-container'>
        <h1 className='page-title'>Social</h1>
        <div className='chatbox'>
          <ChatBox
          username={props.username}
          />
        </div>
      </div>
    </div>
  )
}

export default Social
