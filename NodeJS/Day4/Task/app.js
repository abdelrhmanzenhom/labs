const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./src/config/db");
process.env.DATABASE;


dotenv.config();
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./pages");

// Routes
const studentRouter = require("./src/routes/studentRouter");
app.use("/api/students", studentRouter);

// Not found handler
app.use((req, res) => res.status(404).send("Not Found"));

module.exports = app;
