const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

//update consumed item status to 'consumed'
router.put('/', (req, res) => {
    
    let id = req.body.id;
    let queryText = `
    UPDATE ingredients 
    SET status='consumed' WHERE id=$1;
    `;
    pool.query(queryText, [id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error making update to DB', error);
    })
})


// // EXAMPLE CODE *********************
// router.put('/quantity/:id', (req, res) => {
//     let idToUpdate = req.params.id;
//     let quantity = req.body.quantity;
  
//     if (!quantity) {
//       // If we don't get expected quantity, send back bad status
//       res.sendStatus(500);
//       return; // Do it now, don't run code below
//     }
  
//     let sqlText = `UPDATE inventory SET quantity=$2 WHERE id=$1`;
//     pool.query(sqlText, [idToUpdate, quantity])
//       .then((result) => {
//         res.sendStatus(200);
//       })
//       .catch((error) => {
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(500);
//       })
//   })




module.exports = router;
