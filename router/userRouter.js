const express = require("express");
const {
  getUser,
  getUserbyid,
  createUser,
  updatedUser,
  deleteUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter
  .get("/users", getUser)
  .get("/users/:uuid", getUserbyid)
  .post("/users", createUser)
  .put("/users", updatedUser)
  .delete("/users", deleteUser);

module.exports = { userRouter };
