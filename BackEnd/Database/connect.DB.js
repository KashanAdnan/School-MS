const mongoose = require("mongoose");

const connectDatabase = (url) => {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("Database is Connected......");
    })
    .catch((err) => {
      console.log("Database is Disconnected......");
    });
};


module.exports = connectDatabase;