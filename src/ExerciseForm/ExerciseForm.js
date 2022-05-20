import './ExerciseForm.css'
import { useState } from 'react'

const ExerciseFrom = (props) => {
    // console.log("props1",props)
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')

   const changeHandler = (e) => {
        // this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    const submitNewExercise = (e, exercise) => {
        e.preventDefault()
        props.addExercise(exercise)
    }

    let targets = []
        let categories;

        if (props.allExercises[0]) {
            props.allExercises.forEach(exercise => {
                if (!targets.includes(exercise.target)) {
                    targets.push(exercise.target)
                }
            })

            categories = targets.map(target => {
                return <option key={target} value={target}>{target}</option>
            })
        }

        let allOptions;
        if (category) {
            let options = props.allExercises.filter(exercise => exercise.target === category)

            allOptions = options.map(exercise => {
                let check = ""
                if (props.addedExercises.includes(exercise)) {
                    check = "✅"
                }
                return (
                    <article className='exercise-card' key={exercise.gifUrl}>
                        <img className='category-img' src={exercise.gifUrl} />
                        <p>{exercise.name}</p>
                        <button onClick={(e) => submitNewExercise(e, exercise)}>Add Exercise</button>
                        <p>{check}</p>
                    </article>
                )
            })
        }
    return (
        <form className='exercise-form' >
                <select
                    placeholder='Choose Category'
                    name="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
                    <option
                        value=''
                    >Choose Category</option>
                    {categories}
                </select>
                <section
                    className='exercise-cards-section'>
                    {allOptions}
                </section>
            </form>
    )
}

export default ExerciseFrom