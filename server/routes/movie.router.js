const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // gets all available movie data from database
    console.log('GET /api/movies');
    pool.query('SELECT * from "movies";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/movies', error)
        res.sendStatus(500);
    });
})


module.exports = router;