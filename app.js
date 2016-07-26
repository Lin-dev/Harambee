var express = require('express');
var app = express();
var User = require("./models/user");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3000));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/login", function(req,res){
  res.send("Hello from login");
});

app.get("/signup", function(req,res){
  res.render("signup");
});

app.post("/signup", function(req,res){
  res.send("hello from post");
});

app.listen(app.get('port'), function(){
  console.log("Harambee!! Harambee!! Harambee!! Harambee!!");
});
