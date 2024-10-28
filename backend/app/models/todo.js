const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title not provided"],
    trim: true,
    maxlength: [20, "Title ecxeeds 20 cahracters"],
  },
  is_done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
