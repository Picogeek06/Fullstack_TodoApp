var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://Picogeek06:Picogeek06@cluster0.rgevl.gcp.mongodb.net/todoapp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
