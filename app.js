var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.render('index.ejs');
  })

app.listen(3000);
console.log('Server started on port 3000');