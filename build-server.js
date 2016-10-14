var express = require('express');
var app = express();
var compress = require('compression');
var port = process.env.PORT || 4200;

app.use(compress());
app.use('/', express.static('dist'));

app.listen(port);

console.log('localhost:' + port);