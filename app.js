var express = require('express');
var app = express();
var path = require('path');
var qr = require('qr-image');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index.ejs');
  });

app.post('/', function(req, res) {

  //set form input data to variables
  var url = req.body.qr_url;
  var imgName = req.body.qr_name;

  var code = qr.image(url, { type: 'png' });
  res.setHeader('Content-type', 'image/png');  //sent qr image to client side
  code.pipe(res);
});


app.listen(3000);
console.log('Server started on port 3000');