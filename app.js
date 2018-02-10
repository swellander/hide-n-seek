var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('HEYYYYYYY');
})

app.listen(3000);
console.log('Server started on port 3000');