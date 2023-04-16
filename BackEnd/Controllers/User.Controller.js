const User = require("../Models/User.Model");
const bcrypt = require("bcrypt");
const sendToken = require("../Utils/Send.Token");


const createUser = async (req, res) => {
  const { image, name, email, phone, password } = req.body;
  const user = await User.create({
    image,
    name,
    email,
    phone,
    password,
  });

  sendToken(user, 201, res);
};



module.exports = {
  createUser,
};
