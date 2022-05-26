import { useState } from 'react'
import './Exercise.css'

const Exercise = (props) => {
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')

  const addSet = (e) => {
    e.preventDefault()
    const newSet = {
      workout_exercise_id: props.exercise.id,
      reps: reps,
      weight_lbs: weight
    }
    setSets([...sets, newSet])
    props.setAllSets([...props.allSets, newSet])
    setReps('')
    setWeight('')
  }

  let allSets
  if (sets[0]) {
    allSets = sets.map((set, i) => {
      return (
        <p className='set-info' key={i}>
          Set {(i += 1)}: {set.reps} reps x {set.weight_lbs} lbs{' '}
        </p>
      )
    })
  }

  return (
    <section className='exercise'>
      <div className='image-container'>
        <img className='exercise-img' src={props.exercise.gif_url} />
      </div>
      <div className='exercise-info-container'>
        <div className='exercise-info'>
          <p className='exercise-text'>{props.exercise.name}</p>
          <p className='exercise-text'>Equipment: {props.exercise.equipment}</p>
        </div>
        <div>
          {allSets}
          <form onSubmit={(e) => addSet(e)}>
            <div className='set-form'>
              <p className='add-set'>Add Set:</p>
              <input
                value={reps}
                className='rep-input'
                name='reps'
                placeholder='Repetitions'
                onChange={(e) => setReps(e.target.value)}
                required
              ></input>
              <input
                name='weight'
                className='weight-input'
                value={weight}
                placeholder='Weight'
                onChange={(e) => setWeight(e.target.value)}
                required
              ></input>
              <button className='add-set-button'>+</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Exercise
