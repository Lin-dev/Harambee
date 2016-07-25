var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3000));

app.get("/", function(req, res){
  res.send("<h1>Hello from Harambee!</h1>")
});

app.listen(app.get('port'), function(){
  console.log("Harambee!! Harambee!! Harambee!! Harambee!!");
});
