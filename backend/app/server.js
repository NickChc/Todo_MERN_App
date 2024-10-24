const express = require("express");
const app = express();
require("dotenv").config();
const todosRouter = require("../router/todos");

// Allow JSON body in requests
app.use(express.json());

// Use todos router
app.use("/todos", todosRouter);

app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(process.env.PORT, () => {
  console.log(`The app is listening to port - ${process.env.PORT}....`);
});
