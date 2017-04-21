/**
 * Module dependencies.
 */

var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');
var http = require('http');

var api = require('./api');

/**
 * Setup middleware.
 */

var app = express();

app.use(favicon(path.resolve('public/favicon.ico')));

app.use(compression());
app.use(express.static(path.resolve('public/'), {
    maxAge: 31536000000, // 1 year in ms
    setHeaders: (res, path, stat) => {
        res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
    }
}));

app.get('/api/products', api.products.get);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

// catch 404 and forward to home page
app.use(function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

if (process.env.ADDRESS) {
    server.listen(port, process.env.ADDRESS);
} else {
    server.listen(port);
}
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    console.log('Listening on ' + addr.address + ":" + addr.port);
}
