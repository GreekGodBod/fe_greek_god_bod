import './ExerciseForm.css'
import { useState } from 'react'

const ExerciseForm = (props) => {
  const [category, setCategory] = useState('')

  const submitNewExercise = (e, exercise) => {
    e.preventDefault()
    props.addExercise(exercise)
  }

  let targets = []
  let categories

  if (props.allExercises[0]) {
    props.allExercises.forEach((exercise) => {
      if (!targets.includes(exercise.target)) {
        targets.push(exercise.target)
      }
    })

    categories = targets.map((target) => {
      return (
        <option key={target} value={target}>
          {target}
        </option>
      )
    })
  }

  let allOptions
  if (category) {
    let options = props.allExercises.filter(
      (exercise) => exercise.target === category
    )

    allOptions = options.map((exercise) => {
      let check = ''
      if (props.addedExercises.includes(exercise)) {
        check = 'Added!'
      }
      return (
        <button
          key={exercise.gifUrl}
          className='exercise-card-button'
          onClick={(e) => submitNewExercise(e, exercise)}
        >
          <article
            className={
              props.addedExercises.includes(exercise)
                ? 'exercise-card-select'
                : 'exercise-card'
            }
            key={exercise.gifUrl}
          >
            <img className='category-img' src={exercise.gifUrl} />
            <p className='name-text'>{exercise.name}</p>
          </article>
        </button>
      )
    })
  }
  return (
    <form className='exercise-form'>
      <select
        className='select-category'
        placeholder='Choose Category'
        name='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>Choose Category</option>
        {categories}
      </select>
      <section className='exercise-cards-section'>{allOptions}</section>
    </form>
  )
}

export default ExerciseForm
