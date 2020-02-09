var data = require('../DAL/exercises')
var {Exercise, Descriptor} = require('../models/exercises')

exports.getExercises = (req, res, next) => {
    data.getExercises()
        .then((results) => {
            let lifts = [];

            for (let i = 0; i < results.rows.length; i++) {
                let currentId = results.rows[i].exercise_id;
                let descriptors = [];

                for (let x = i; x < results.rows.length; x++) {
                    if (results.rows[x].exercise_id === currentId) {
                        descriptors.push(new Descriptor(results.rows[x].muscle_target_name));
                    }
                }

                //If we have mutltible muscle_targets we advance array
                if (descriptors.length > 1) {
                    i += (descriptors.length - 1)
                }

                lifts.push( new Exercise(
                    results.rows[i].exercise_id,
                    results.rows[i].exercise_name,
                    results.rows[i].description,
                    results.rows[i].instructions,
                    descriptors
                ));
            }
            res.status(200).send(
                lifts
            )
        })
        .catch((err) => {
            console.log("An error occured: " + err)
        })
}