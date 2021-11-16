const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// **** GET TYPES FOR DROP DOWN 
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "food_type"`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('error: get all types', err);
    res.sendStatus (500)        
    });
});

router.get('/location', (req, res) => {
    let queryText = `SELECT * FROM "location"`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('error: get all locations', err);
    res.sendStatus (500)        
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
