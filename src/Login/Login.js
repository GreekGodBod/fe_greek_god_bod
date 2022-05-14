import './Login.css'
import { useState } from 'react'
import userData from '../sampleData'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  // const login = (id) => {
  //   userData.find(user => user.id === )
  // navigate to= "/dashboard"
  // }

  // const validate = () => {

  // }

  return (
    <form className='login-form' onSubmit='tbd'>
      <input
        type='text'
        id='usernameInput'
        name='username'
        value={username}
        className='username-input no-outline'
        placeholder='username:'
        aria-label='username input'
        onChange={updateUsername}
      />
      <br />
      <br />
      <input
        type='password'
        id='passwordInput'
        name='password'
        value={password}
        className='password-input no-outline'
        placeholder='password:'
        aria-label='password input'
        onChange={updatePassword}
      />
      <br />
      <br />
      <div className='button-container'>
        <input
          type='submit'
          id='submit'
          value='login'
          className='login-button'
          onClick='tbd'
        />
      </div>
    </form>
  )
}

export default Login
