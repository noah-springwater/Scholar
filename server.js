var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();
var Book = require('./models/book.js');

app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname+'/bower_components'));
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/scholarApp', function (err){
  if(err){
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});



app.get('/books', function (req, res) {
    Book.find().exec(function (err, books) {
      res.send(books);
    });
  });

app.post('/books', function (req, res) {
  var book = new Book(req.body);
  book.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.send(book);
    }
  });
});


app.listen(3000, function () {
  console.log('App listening on port 3000...');
})
