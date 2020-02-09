const express = require('express');
const exercisesRoutes = require('./routes/exercises');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Middleware that sets headers onto a response that lets the client know it is okay to use
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/exercises', exercisesRoutes);

app.listen(8080);