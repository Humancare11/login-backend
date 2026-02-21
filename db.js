// const mongoose = require("mongoose");

// const connectDB = async () => {
// await mongoose.connect("mongodb+srv://satishdalvi2210_db_user:Satish123@cluster0.9lai1xz.mongodb.net/?appName=Cluster0");
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;