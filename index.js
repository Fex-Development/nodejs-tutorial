var http = require('http');
var dt1 = require('./myfirstmodule');  
var dt2 = require('./p.py'); 
var dt3 = require('./server.js');
var dt4 = require('./app.js');
var dt5 = require("./nodemailer.js")
var dt6 = require("./chatapp/app.js")
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);