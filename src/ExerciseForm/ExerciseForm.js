import './ExerciseFrom.css'

const ExerciseFrom = (props) => {
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitNewExercise = (e, exercise) => {
        e.preventDefault()
        this.props.addExercise(exercise)
    }

    let targets = []
        let categories;

        if (this.props.newExercises[0]) {
            this.props.newExercises.forEach(exercise => {
                if (!targets.includes(exercise.target)) {
                    targets.push(exercise.target)
                }
            })

            categories = targets.map(target => {
                return <option key={target} value={target}>{target}</option>
            })
        }

        let allOptions;
        if (this.state.category) {
            let options = this.props.newExercises.filter(exercise => exercise.target === this.state.category)

            allOptions = options.map(exercise => {
                let check = ""
                if (this.props.addedExercises.includes(exercise)) {
                    check = "✅"
                }
                return (
                    <article className='exercise-card' key={exercise.gifUrl}>
                        <img className='category-img' src={exercise.gifUrl} />
                        <p>{exercise.name}</p>
                        <button onClick={(e) => this.submitNewExercise(e, exercise)}>Add Exercise</button>
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
                    value={this.state.category}
                    onChange={e => this.changeHandler(e)}>
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