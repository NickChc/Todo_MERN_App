const express = require("express");
const app = express();
const env = require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`The app is listening to port - ${process.env.PORT}....`);
});
