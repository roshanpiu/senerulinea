var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/ping', function(req, res) {

    res.json({
        response: "pong"
    });
});



var port = process.env.PORT || 3007;

app.listen(port, function() {
    console.log("The server is running on port " + port);
});
