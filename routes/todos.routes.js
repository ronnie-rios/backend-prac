const express = require('express');

const TodoController = require('../controller/todos.controller');


const noteRoutes = express.Router();

noteRoutes.post('/:id', TodoController.postNote);


module.exports = { noteRoutes }