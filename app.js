//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/portfolio", function(req, res){
  res.render("portfolio");
});

app.get("/pets", function(req, res){
  res.render("pets");
});

app.get("/weddings", function(req, res){
  res.render("weddings");
});

app.get("/modelling", function(req, res){
  res.render("modelling");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/pricing", function(req, res){
  res.render("pricing");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.post("/", function(req, res){

  var name = req.body.fname;
  var email = req.body.email;
  var message = req.body.Message;

  console.log(name, email, message);
});

function submit_form() {
  document.form1.submit();
  document.form1.reset();
}



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
