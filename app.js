var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(compression()); 
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to home page
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app;