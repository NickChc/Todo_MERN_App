function getAllTodos(req, res) {
  res.status(200).json({ success: true, data: "Got Todos" });
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
