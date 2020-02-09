const { Pool } = require('pg');                             //Postgresql   
const config = require('../config');

const pool = new Pool({
    connectionString: config.connectionString,
});

exports.query = async function(sql, args) {
    return await pool.query(sql, args);
};

//This function connects to a pool and executes a query to our pg database
// exports.query = function(sql, args) {
//     return new Promise((resolve, reject) => {
//         pool
//         .query(sql, args)
//         .then(result => {
//             resolve(result);
//         })
//         .catch(err => {
//             reject(err);
//         })
//     })
// };