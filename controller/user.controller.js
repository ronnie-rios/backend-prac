const User = require("../models/user.model");

const getAll = async (req, res) => {
  try {
    const users = await User.find().populate('todos');
    return res.json(users);
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("todos");
    return user
      ? res.json(user)
      : res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({  user: user });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  getAll,
  getOneUser,
  createUser
};
