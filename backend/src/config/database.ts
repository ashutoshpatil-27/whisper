import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.log("❌ Connection Error: Failed to connect to mongoDB", error);
    process.exit(1); // code 1 means failed and code 0 means success
  }
};

export default connectDB;
