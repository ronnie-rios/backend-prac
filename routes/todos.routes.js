const express = require('express');

const TodoController = require('../controller/todos.controller');


const todoRoutes = express.Router();

todoRoutes.post('/:id', TodoController.postNote);
todoRoutes.delete('/:noteId/user/:userId', TodoController.deleteNote);


module.exports = { todoRoutes }