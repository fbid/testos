var http = require('http');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var address = process.env.OPENSHIFT_NODEJS_IP || 127.0.0.1;

var s = http.createServer().listen(port,address);