const mongoose = require('mongoose');
const userModel = require('./userModel');

const connectDB = () => {
  return mongoose.connect(
    'mongodb://admin:admin1234@ds261521.mlab.com:61521/kyrylivskyy-bot',
    {
      useNewUrlParser: true
    }
  );
};

module.exports = {
  connectDB,
  User: userModel
}

