const express = require("express");

const recipeRouter = require("../recipes/recipe-router.js");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    message: "Something went wrong. Try again later"
  });
});

module.exports = server;
