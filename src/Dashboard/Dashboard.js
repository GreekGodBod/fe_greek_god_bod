import './Dashboard.css'

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <header>
        <h1>Welcome, User!</h1>
        {/* <img src='tbd' className='profile-pic' alt='user-prof-pic' /> */}
      </header>
      <section className='button-container'>
        <button className='social-button'>Social</button>
        <button className='create-workout-button'>Create Workout</button>
        <button className='suggested-button'>Suggested Workouts</button>
        <button className='past-workout-button'>Past Workouts</button>
      </section>
    </section>
  )
}

export default Dashboard
