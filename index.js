var http = require('http');
var dt = require('./myfirstmodule');  
var dt = require('./p.py'); 
var dt = require('./server.js');
var dt = require('./app.js');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);