
const newExercises = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '0db63607a1mshb7058632ce290c3p10e57ajsn0d36c557c666'
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
        .then(response => response.json())
            // if (response.status === 404) {
            //     throw new Error("404: Not Found")
            // } else if (response.status === 500) {
            //     throw new Error("500: Server is having issues")
            // }
        //     return response.json()
        // })
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
      if (response.status === 400){
        throw new Error("404:Not Found")
      } else if (response.status === 500){
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
  }

  const patchWorkout = (workout) => {
    return fetch('https://be-greek-god-bod.herokuapp.com//api/v1/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout)
    })
    .then(response => {
      if (response.status === 400){
        throw new Error("404:Not Found")
      } else if (response.status === 500){
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
  }

export { newExercises, getPastWorkouts, getSuggestedWorkouts, postCreatedWorkout, patchWorkout }