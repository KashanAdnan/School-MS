const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gardians: [
      {
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
      },
    ],
    courses: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    is_verified: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Students", studentSchema);
