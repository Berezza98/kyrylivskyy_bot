const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  username: String,
  id: Number,
  date: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;