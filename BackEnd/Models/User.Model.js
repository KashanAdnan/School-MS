const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWTSecret = "KaLM0IKjDfsWeAVbmIo2JsL3HmTlKleqq";


const userSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  is_verified: {
    type: Number,
    default: 0,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, JWTSecret, {
    expiresIn: "5d",
  });
};
userSchema.methods.comparePassword = async function (EnteredPassword) {
  return await bcrypt.compare(EnteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
