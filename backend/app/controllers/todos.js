const Todo = require("../models/todo");

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find({});

    res.status(200).json({ success: true, data: { todos } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function getSingleTodo(req, res) {
  try {
    const { id: todoId } = req.params;

    const todo = await Todo.findOne({ _id: todoId });

    if (todo == null) {
      return res.status(404).json({
        success: false,
        message: `Todo with an ID - ${todoId} not found`,
      });
    }

    res.status(200).json({ success: true, data: { todo } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function createTodo(req, res) {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({ success: true, data: todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (todo == null) {
      return res.status(404).json({
        success: false,
        message: `Todo with an ID - ${todoId} doesn't exist`,
      });
    }

    res.status(200).json({ success: true, data: { todo } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function updateTodo(req, res) {
  try {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (todo == null) {
      return res.status(404).json({
        success: false,
        message: `Todo with an ID - ${todoId} doesn't exist`,
      });
    }

    res.status(200).json({ success: true, data: { todo } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
