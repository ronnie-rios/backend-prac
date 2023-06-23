const express = require('express');

const TodoController = require('../controller/todos.controller');


const todoRoutes = express.Router();

todoRoutes.post('/:id', TodoController.postNote);


module.exports = { todoRoutes }