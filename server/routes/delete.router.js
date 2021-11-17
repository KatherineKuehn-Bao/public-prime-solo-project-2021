const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.delete('/:id', (req, res) => {
//     console.log('user is', req.user.id)

//     console.log('comparing to ingredient user id', req.params.id)
//     let id = req.params.id
//     let queryText = `
//         DELETE FROM "ingredients"
//         WHERE id = $1 AND 
//         user_id = $2;`;
//     let values = [id, req.user.id]

//     pool.query(queryText, values)
//         .then(results => {
//             console.log('result is', results);
//             if (results.rowCount === 0) {
//                 res.sendStatus(403)
//             } else {
//                 res.sendStatus(204)
//             }
//         }).catch(err => {
//             console.log(err)
//             res.sendStatus(500)

//             })
    
    
// });

module.exports = router;
