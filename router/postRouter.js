const express = require("express");
const postRouter = express.Router();
const { getPost, createPost } = require("../controllers/postController");

postRouter.get("/posts", getPost).post("/posts", createPost);

module.exports = { postRouter };
