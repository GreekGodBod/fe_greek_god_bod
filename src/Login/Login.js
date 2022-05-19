import './Login.css'
import { useState } from 'react'
import userData from '../sampleData'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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

  const handleClick = () => {
    navigate('/dashboard')
  }

  return (
    <form className='login-form' onSubmit='tbd'>
      <input
        type='text'
        id='usernameInput'
        name='username'
        value={username}
        className='username-input no-outline'
        placeholder='Username:'
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
        placeholder='Password:'
        aria-label='password input'
        onChange={updatePassword}
      />
      <br />
      <br />
      <div className='button-container'>

        <input
          type='submit'
          id='submit'
          value='Login'
          className='login-button'
          onClick={handleClick}
        />
      </div>
    </form>
  )
}
// the navlink will have to be a variable on the user also I still dont know if it will work and submit

export default Login
