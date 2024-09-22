const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./router/index");

const PORT = process.env.PORT || 5000;
const app = express();

// import modules like cors
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

//start function on our project
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
