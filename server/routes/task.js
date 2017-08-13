var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req, res) {
    console.log('task was hit');
    pool.connect(function(errorConnectingToDataBase, client, done){
        if(errorConnectingToDataBase) {
            console.log(('Error connecting to database', errorConnectingToDataBase));
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM tasks;', function(errorMakingQuery, result) {
                done ();
                if(errorMaingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }
        )
        }
    })
})








module.exports = router;