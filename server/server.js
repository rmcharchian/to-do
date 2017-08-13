var express = require('express');
var bodyParser = require('body-parser');
//var TBD = require ('./routes/tbd')  NEED ROUTE

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/TBD', TBD)

app.listen(port, function() {
    console.log('listening on port', port);
});