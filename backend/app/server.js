const express = require("express");
const app = express();
require("dotenv").config();
const todosRouter = require("./router/todos");
const connectDB = require("./db/connect");

// Middleware

app.use(express.json());

// Todos router middleware
app.use("/todos", todosRouter);

app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

async function start() {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`The app is listening to port - ${process.env.PORT}....`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
