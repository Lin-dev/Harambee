var express = require('express');
var app = express();
var User = require("./models/user");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var mongoose = require('mongoose');

var url = process.env.DATABASEURL || "mongodb://localhost/Harambee"

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3000));

mongoose.connect(url);

//=============================
//=====PASSPORT CONFIG=========
//=============================
app.use(require("express-session")({
  secret: "394583059834950",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// THEY READ THE SESSION ENCODES AND
// THEN DECODES THE SESSION
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//=============================
//=====      END      =========
//=============================

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
