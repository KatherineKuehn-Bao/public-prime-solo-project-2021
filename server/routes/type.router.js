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
router.post('/post', (req, res) => {
    console.log('REq. body', req.body);

    const queryText =`
    INSERT INTO ingredients 
    ("food_name", "expiration_date", 
    "status", "user_id", "food_type_id", "location_id")
    VALUES ($1, $2, $3, $4, $5, $6);
    `;
    pool.query(queryText, 
        [req.body.food_name, req.body.expiration_date,
        req.body.status, req.user.id, req.body.food_type_id,
        req.body.location_id
        ])
        .then (result => {
            console.log('results', result.rows);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in query', error);
            res.sendStatus (500);
        })
});

// EXAMPLE 
//  router.post('/', (req, res) => {
//     const newItem = req.body;
//     const sqlText = `INSERT INTO inventory (name, quantity, measure) 
//         VALUES ($1, $2, $3)`;
//     pool.query(sqlText, [newItem.name, newItem.quantity, newItem.measure])
//       .then((result) => {
//         console.log(`Added song to the database`, newItem);
//         res.sendStatus(201);
//       })
//       .catch((error) => {
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(500); // Good server always responds
//       })
//   })




router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
