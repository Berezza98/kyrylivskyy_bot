const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  username: String,
  id: Number,
  date: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;