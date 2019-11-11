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

router.get('/details/:id', (req, res) => {
    // gets all available movie data from database
    console.log('GET /api/movies/details');
    pool.query('SELECT * from "movies" WHERE id=$1;', [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/movies/details', error)
        res.sendStatus(500);
    });
})


module.exports = router;