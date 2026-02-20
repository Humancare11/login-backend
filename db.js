const mongoose = require("mongoose");

const connectDB = async () => {
await mongoose.connect("mongodb+srv://satishdalvi2210_db_user:Satish123@cluster0.9lai1xz.mongodb.net/?appName=Cluster0");
};

module.exports = connectDB;