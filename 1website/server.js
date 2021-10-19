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

/* want to add own page to this website here is a example go to views folder create a html file like
<html>
<body>
  <p>page not found 404</p>
</body>
</html>
name it .html at the last like example.html
now come here and typ the details of the html page in easy words example

router.get("/yourpagename",function(req,res){
  res.sendFile(viewPath + "yourfilename.html");
});

i think you got it have enjoy dont forget to leave a star on our github page.*/

app.use("/",router);

// 404 page has errors we will fix it later
/*app.use("*",function(req,res){
  res.sendFile(viewPath + "404.html");
});*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
