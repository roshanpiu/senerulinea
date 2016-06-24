var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/*', express.static(path.join(__dirname, 'public/index.html')));


var mongoose = require('mongoose');
mongoose.connect('mongodb://roshan:123@ds035623.mlab.com:35623/brandix');
var db = mongoose.connection;


app.get('/ping', function(req, res) {

    res.json({
        response: "pong"
    });
});

var PORT = 3007;

var brandix = require('./routes/brandix_routes.js')(app);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var server = app.listen(process.env.PORT || PORT,function(){
        console.log("Connected to the DB Server is running at port " + PORT);
    });
});


