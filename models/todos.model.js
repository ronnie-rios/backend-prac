const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    body: {
        type: String,
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;