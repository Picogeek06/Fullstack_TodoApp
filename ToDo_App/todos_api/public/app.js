//const { $where } = require("../models/todo");

const bodyParser = require("body-parser");

$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);
});

var dark = document.getElementsByClassName("dark")

function addTodos(todos) {
  //add todos to the page
  todos.forEach(function (todo) {
    var newTodo = $("<li>" + todo.name + "</li>");
    $('.list').append(newTodo);
  });
}

dark.addEventListener(function(){
    body.addClass("dark");
})