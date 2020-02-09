const express = require('express');
const controller = require('../controllers/exercises')
const router = express.Router();

router.get('/getExercises', controller.getExercises)

module.exports = router;