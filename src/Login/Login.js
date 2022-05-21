import './Login.css'
import '../App/App.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({setUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
  const userId = username.charAt(username.length -1)
   setUser(userId)

  if (password === `password${userId}` && username === `user_${userId}`) {
    navigate(`/dashboard/user/${userId}`)
  } else {
    alert('incorrect credentials.')
    }
  }

  return (
    <form className='login-form' onSubmit={e => login(e)}>
      <input
        type='text'
        id='usernameInput'
        name='username'
        value={username}
        className='username-input no-outline'
        placeholder='Username:'
        aria-label='username input'
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type='password'
        id='passwordInput'
        name='password'
        value={password}
        className='password-input no-outline'
        placeholder='Password:'
        aria-label='password input'
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <br />
      <div className='button-container'>

        <input
          type='submit'
          id='submit'
          value='Login'
          className='login-button'
        />
      </div>
    </form>
  )
}

export default Login
