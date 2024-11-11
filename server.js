// require express
const express = require("express");

// create express
const app = express();

// require dotenv
require("dotenv").config();

// middleware body-parser
app.use(express.json());
//connect database
const connectDB = require("./config/connectDB")
connectDB()

// routes
app.use("/api/user", require("./routes/user"));

// create port 
const PORT = process.env.PORT
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on Port ${PORT}....`)
});
