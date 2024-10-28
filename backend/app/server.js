const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const todosRouter = require("./router/todos");
const connectDB = require("./db/connect");

// Middleware

// Allow requests from front end
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);

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
