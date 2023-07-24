const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: ["http://deploy-mern-1whq.vercel.app"],
    methods:['GET','POST'],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});


app.use("/", authRoutes);
app.use(express.json());
