//core requiremens
var express = require('express');
var path = require('path');
var app = express();

// webpages
var index = require('./routes/index');
var register = require('./routes/register');
var kcal = require('./routes/kcal');

app.use('/', index);
app.use('/register', register);

//core setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;