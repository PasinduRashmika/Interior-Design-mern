const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
  },
  des: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String,
});

module.exports = Service;