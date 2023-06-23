const User = require("../models/user.model");
const Todo = require("../models/todos.model");

const postNote = async (req, res) => {
    try {
      const newTodo = await Todo.create(req.body);
    
      const foundUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { todos: newTodo._id } },
        { new: true }
      );
     
      return foundUser
      ? res.json(foundUser)
      : res.status(404).json({ message: "User not found" });
    } catch (error) {
      res.status(400).json({ err: error })
    }
  };
  
  
  module.exports = {
      postNote
  }