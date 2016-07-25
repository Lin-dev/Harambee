var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.send("<h1>Hello from Harambee!</h1>")
});

app.listen(3000, function(){
  console.log("Harambee!! Harambee!! Harambee!! Harambee!!");
});
