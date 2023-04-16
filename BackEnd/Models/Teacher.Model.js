const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  is_verified: {
    type: Number,
    default: 0,
  },
  strict: {
    type: Boolean,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  addres: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  classes_you_can_teach: {
    type: String,
    required: true,
  },
  subjects_you_can_teach: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Teachers", teacherSchema);
