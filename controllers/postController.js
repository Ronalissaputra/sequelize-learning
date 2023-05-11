const { Post, User } = require("../models");
const createPost = async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, userId: user.id });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: "user" });
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { getPost, createPost };
