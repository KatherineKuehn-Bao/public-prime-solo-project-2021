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

//**** GET LOCATIONS fro drop down  */
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

//**** GET ALL INGREDIENTs TO RENDER TO DOM  */
router.get('/ingredients', (req, res) => {
    const sqlText = `SELECT * FROM ingredients ORDER BY date;`;
    pool.query(sqlText)
      .then((result) => {
        //console.log(`Got inventory:`, result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      })
  })


// ADD NEW ITEM TO INGREDIENTS from form
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


module.exports = router;
