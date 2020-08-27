$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);

  $('#todoInput').keypress(function(event){
    if(event.which == 13) {
      createTodo();
    }
  });
});



var dark = document.getElementsByClassName("dark")

function addTodos(todos) {
  //add todos to the page
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '</li>');
    if(todo.completed){
      newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo(){
  //send request to create new todo
  var usrInput = $('#todoInput').val();
  
  $.post('/api/todos',{name: usrInput} )
  .then(function(newTodo){
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(function(err){
    console.log(err);
  })
} 