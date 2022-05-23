import './Login.css'
import '../App/App.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, setUsername }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    const userId = name.charAt(name.length - 1)
    setUser(userId)
    setUsername(name)

    if (password === `password${userId}` && name === `user_${userId}`) {
      navigate(`/dashboard/user/${userId}`)
    } else {
      alert('incorrect credentials.')
    }
  }

  return (
    <form className='login-form' onSubmit={(e) => login(e)}>
      <div className='top-half'>
        <div className='login-info-container'>
          <input
            type='text'
            id='nameInput'
            name='name'
            value={name}
            className='username-input no-outline login-input'
            placeholder='Username:'
            aria-label='username input'
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type='password'
            id='passwordInput'
            name='password'
            value={password}
            className='password-input no-outline login-input'
            placeholder='Password:'
            aria-label='password input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div className='login-button-container'>
            <input
              type='submit'
              id='submit'
              value='Login'
              className='login-button'
            />
          </div>
        </div>
      </div>
      <div className='bottom-half'>
        <h1 className='title'>GREEK GOD BOD</h1>
      </div>
    </form>
  )
}

export default Login
