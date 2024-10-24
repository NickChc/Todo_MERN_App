const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ success: true, data: "Got Todos" });
  })
  .post((req, res) => {
    res.status(201).json({ success: true, data: req.body });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id: todoId } = req.params;

    res.status(200).json({ success: true, data: `Got Single Todo ${todoId}` });
  })
  .delete((req, res) => {
    const { id: todoId } = req.params;

    res
      .status(200)
      .json({ success: true, data: `Deleted Single Todo ${todoId}` });
  })
  .patch((req, res) => {
    res.status(200).json({ success: true, data: req.body });
  });

module.exports = router;
