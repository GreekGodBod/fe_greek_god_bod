import { useState } from 'react'
import './Exercise.css'

const Exercise = (props) => {
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSets] = useState('')
    // console.log(props,"props")
    const addSet = e => {
        e.preventDefault()
        const newSet = {
            reps: reps,
            weight: weight
        }
        setSets([...sets, newSet])
        setReps('')
        setWeight('')
    }

    let allSets;
        if (sets[0]) {
            allSets = sets.map((set, i) => {
                return <p key={i}>Set {i += 1}: {set.reps} reps x {set.weight} lbs </p>
            })
        }

    const doWorkoutPage = `http://localhost:3000/doworkout/${props.id}`
        console.log("props", props)
    return (
        <section className="exercise">
            <img className="exercise-img" src={props.exercise.gifUrl} />
            <div>
                <p>{props.exercise.name}</p>
                <p>Equipment: {props.exercise.equipment}</p>
            </div>
            {window.location.href === doWorkoutPage &&
                <div>
                    {allSets}
                    <form onSubmit={(e) => addSet(e)}>
                        <div className="set-form">
                            <p>Add Set:</p>
                            <input
                                value={reps}
                                name="reps"
                                placeholder="Repetitions"
                                onChange={(e) => setReps(e.target.value)}
                                required
                            >
                            </input>
                            <input name="weight"
                                value={weight}
                                placeholder="Weight"
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            >
                            </input>
                            <button>+</button>
                        </div>
                    </form>
                </div>
            }
        </section>
    )
}

export default Exercise