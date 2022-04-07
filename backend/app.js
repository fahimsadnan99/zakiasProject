const express = require("express");

const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv").config();
const User = require("./routers/UserRouter");


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());



app.use("/api/user", User);


module.exports = app;
