const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  number: {
    type: Number,
    unique: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
