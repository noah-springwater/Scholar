'use strict';

app.controller("bookCtrl", ["$http", "$log", bookCtrl]);

function bookCtrl($http, $log) {
  $log.log("controller connected");

  var self = this;

  self.newBook = {};
  self.addBook = addBook;
  self.deleteBook = deleteBook;
  self.getBook;
  getBook();

function getBook() {
  $http
    .get('/books')
    .then(function (res) {
      self.all = res.data;
    })
    .catch(function (res) {
      $log.error('failure', res);
    });
}

function addBook() {
  $http
    .post('/books', self.newBook)
    .then(function (response) {
      getBook();
    })
    .catch(function (res) {
      $log.error('failure', res);
    });
  self.newBook = {};
}

function deleteBook(book) {
  $log.log(book);
  $http
    .delete('/books/'+book._id)
    .then(function (response) {
      getBook();
    })
    .catch(function (res) {
      $log.error('failure', res);
    });
}

}
