db = require('../db/query')

exports.getExercises = () => {
    return new Promise((resolve, reject) => {
        db.query(
        `SELECT
            exercises.exercise_id,
            exercises.exercise_name,
            exercises.description,
            exercises.instructions,
            exercise_targets.muscle_target_name
        FROM exercises
        INNER JOIN exercise_targets ON exercises.exercise_id = exercise_targets.exercise_id
        ORDER BY exercise_id;`
        , [])
        .then((res => {
            resolve(res)
        }))
        .catch(err => {
            reject(err);
        })
    })
}