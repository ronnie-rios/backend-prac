const express = require('express');

const { postTodo, deleteTodo} = require('../controller/todos.controller');


const todoRoutes = express.Router();

todoRoutes.post('/:id', postTodo);
todoRoutes.delete('/:todoId/:userId', deleteTodo);


module.exports = { todoRoutes }