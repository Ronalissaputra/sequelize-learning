const express = require("express");
const cors = require("cors");
const { userRouter } = require("./router/userRouter");
const { sequelize } = require("./models");
const { postRouter } = require("./router/postRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use([userRouter, postRouter]);

app.listen({ port: 5000 }, async () => {
  console.log("Server up and running port: http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database connected.!");
});
