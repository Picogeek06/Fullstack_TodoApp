var express = require("express");
var router = express.Router();
var db = require("../models");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;
