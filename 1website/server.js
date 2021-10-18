var express = require("express");
var path = require('path');
var app = express();
var router = express.Router();
var viewPath = __dirname + '/views/';
var publicPath = __dirname + '/public';
var scriptsPath = __dirname + '/scripts';

app.use(express.static(publicPath));
app.use(express.static(scriptsPath));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(viewPath + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(viewPath + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(viewPath + "contact.html");
});

app.use("/",router);


// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
