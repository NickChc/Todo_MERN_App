const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");

router.route("/").get(getAllTodos).post(createTodo);

router.route("/:id").get(getSingleTodo).delete(deleteTodo).patch(updateTodo);

module.exports = router;
