//require mongoose 
const mongoose = require("mongoose");

//connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("dataBase connected");
    } catch (error) {
        console.log("dataBase can not connect")
    }
}
module.exports = connectDB;