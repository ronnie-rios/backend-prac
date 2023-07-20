const express = require('express');

const { postTodo, deleteTodo} = require('../controller/todos.controller');

const todoRoutes = express.Router();
//prepended /api/todos

todoRoutes.post('/:userId', postTodo);
todoRoutes.delete('/:todoId/:userId', deleteTodo);


module.exports = { todoRoutes }