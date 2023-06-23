const express = require("express");
const { createUser, getAll, getOneUser } = require("../controller/user.controller");

//set a variable that uses Router method
const userRoutes = express.Router();
//api/users/create
userRoutes.post("/register", createUser);

//api/users/
userRoutes.get("/", authenticate, getAll);
//api/users/:id
userRoutes.get('/:id', authenticate, getOneUser);


module.exports = { userRoutes };