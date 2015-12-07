var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
  title: String,
  author: String,
  review_url: String,
  img_url: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
