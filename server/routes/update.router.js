const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//EDIT -- currently has an error 
router.put('/edit/:id', (req, res) => {

    const idToUpdate = req.body.id;
    const queryText = `
    UPDATE "ingredients" 
    SET food_name = '$1', 
    expiration_date = '$2',
    status = 'storage',
    food_type_id = '$3',
    location_id = '$4'
    WHERE id= '$5';`

    pool.query(queryText, [
        req.body.food_name,
        req.body.expiration_date,
        // action.payload.status,
        req.body.food_type_id,
        req.body.location_id,
        idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error editing update query`, error);
            res.sendStatus(500);
        });

});




module.exports = router;
