const User = require("../models/user.model");
const Todo = require("../models/todos.model");


const postTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    const foundUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { todos: newTodo._id } },
      { new: true }
    );

    return res.json(foundUser);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteTodo = async(req, res) => {
  try {
    const todoId = req.params.todoId;
    const userId = req.params.userId
    console.log(todoId, 'todo', userId ,'userId');
    // Update the user document to remove the specified todo
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user document to remove the specified todo
    user.todos.pull(todoId);
    await user.save();

    return res.json(user);
    // const updatedUser = await User.findByIdAndUpdate(
    //   userId ,
    //   { $pull: { todos: { _id: todoId } } },
    //   { new: true }
    // );

    // if (!updatedUser) {
    //   return res.status(404).json({ error: 'User or Todo not found' });
    // } 
    // return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
module.exports = {
  postTodo,
  deleteTodo
};
