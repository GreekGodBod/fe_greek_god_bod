
const newExercises = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
  };

  const fetchCall = fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    .then(response => {
      if (response.status === 404) {
        throw new Error("404: Not Found")
      } else if (response.status === 500) {
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
  return fetchCall
}

const getPastWorkouts = (id) => {
  const url = `https://be-greek-god-bod.herokuapp.com//api/v1/user/${id}`
  const fetchCall = fetch(url)
    .then(response => {
      if (response.status === 404) {
        throw new Error("404: Not Found")
      } else if (response.status === 500) {
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
  return fetchCall
}

const getSuggestedWorkouts = () => {
  const url = 'https://be-greek-god-bod.herokuapp.com//api/v1/workouts'
  const fetchCall = fetch(url)
    .then(response => response.json())
  return fetchCall
}


const postCreatedWorkout = (createdWorkout) => {
  return fetch('https://be-greek-god-bod.herokuapp.com//api/v1/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(createdWorkout)
  })
    .then(response => {
      if (response.status === 400) {
        throw new Error("404:Not Found")
      } else if (response.status === 500) {
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
}

const patchWorkout = (workout, id) => {
  return fetch(`https://be-greek-god-bod.herokuapp.com//api/v1/user/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workout)
  })
    .then(response => {
      if (response.status === 400) {
        throw new Error("404:Not Found")
      } else if (response.status === 500) {
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
}

const fetchChat = () => {
  return fetch('https://be-greek-god-bod.herokuapp.com//api/v1/social')
    .then(response => response.json())
}

const fetchUsers = () => {
  return fetch('https://be-greek-god-bod.herokuapp.com//api/v1/user')
    .then(response => response.json())
}

export { newExercises, getPastWorkouts, getSuggestedWorkouts, postCreatedWorkout, patchWorkout, fetchChat, fetchUsers }