import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("db connected");
    }
  } catch (error) {
    console.error(error); // Change this line to log the actual error
  }
};

export default connectDB;
