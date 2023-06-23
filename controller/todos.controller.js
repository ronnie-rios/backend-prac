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

    return res.json(foundUser);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteNote = async(req, res) => {
  try {
    const { userId, todoId } = req.params;
    // Update the user document to remove the specified todo
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $pull: { todos: { _id: todoId } } },
      { new: true }
    );
    return res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}
module.exports = {
  postNote,
  deleteNote
};
