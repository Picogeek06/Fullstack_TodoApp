var { db } = require("../models/todo");
var db = require("../models");

exports.getTodos = function (req, res) {
  db.Todo.find()
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
  //res.send("hello from todos routes");
};

exports.createTodo = function (req, res) {
  db.Todo.create(req.body)
    .then(function (newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.getTodo = function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function (foundTodo) {
      res.json(foundTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.updateTodo = function (req, res) {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body)
    .then(function (todo) {
      res.json(todo);
    })
    .catch(function (err) {
      res.send(err);
    });
  //res.send("Update Route!");
};

exports.deleteTodo = function (req, res) {
  db.Todo.remove({ _id: req.params.todoId })
    .then(function () {
      res.json({ message: "Deleted!" });
    })
    .catch(function (err) {
      res.send(err);
    });
  //res.send("Update Route!");
};

module.exports = exports;