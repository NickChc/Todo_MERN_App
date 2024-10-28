const Todo = require("../models/todo");

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find({});

    console.log(todos);

    res.status(200).json({ success: true, data: { todos } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: "Couldn't send todos" });
  }
}

function getSingleTodo(req, res) {
  const { id: todoId } = req.params;

  res.status(200).json({ success: true, data: `Got Single Todo ${todoId}` });
}

function createTodo(req, res) {
  res.status(201).json({ success: true, data: req.body });
}

function deleteTodo(req, res) {
  const { id: todoId } = req.params;

  res
    .status(200)
    .json({ success: true, data: `Deleted Single Todo ${todoId}` });
}

function updateTodo(req, res) {
  res.status(200).json({ success: true, data: req.body });
}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
