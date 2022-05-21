export const userData = [
  {
    id: 1,
    username: 'lifter1',
    password: 'workout',
    savedWorkouts: [
      {
        target: 'abs',
        exercise: 'situps'
      },
      {
        target: 'biceps',
        exercise: 'curls'
      }
    ]
  },
  {
    id: 2,
    username: 'lifter2',
    password: 'workout',
    savedWorkouts: [
      {
        target: 'abs',
        exercise: 'situps'
      },
      {
        target: 'biceps',
        exercise: 'curls'
      }
    ]
  },
  {
    id: 3,
    username: 'lifter3',
    password: 'workout',
    savedWorkouts: [
      {
        target: 'abs',
        exercise: 'situps'
      },
      {
        target: 'biceps',
        exercise: 'curls'
      }
    ]
  }
]

const completedWorkoutSampleOject = {
  id: 1,
  name: 'Chest Day',
  exercises: [
    {
      bodyPart: "chest",
      equipment: "assisted",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1716.gif",
      id: "1716",
      name: "assisted seated pectoralis major stretch with stability ball",
      target: "pectorals",
      intervals: [
        {
          id: 1,
          reps: 12,
          weight_lbs: 130
        },
        {
          id: 2,
          reps: 12,
          weight_lbs: 150
        },
        {
          id: 3,
          reps: 12,
          weight_lbs: 170
        }
      ]
    },
    {
      bodyPart: "chest",
      equipment: "leverage-machine",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1716.gif",
      id: "0009",
      name: "assisted chest dip (kneeling)",
      target: "pectorals",
      intervals: [
        {
          id: 1,
          reps: 12,
          weight_lbs: 130
        },
        {
          id: 2,
          reps: 12,
          weight_lbs: 150
        },
        {
          id: 3,
          reps: 12,
          weight_lbs: 170
        }
      ]
    }
  ]
}
