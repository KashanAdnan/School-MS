const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./Database/connect.DB");
const userRoute = require("./Routes/User.Route");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
connectDatabase("mongodb://localhost:27017/SMS");

app.use("/api/v1", userRoute);

app.listen(3000, () => {
  console.log("Server is Running....");
});
