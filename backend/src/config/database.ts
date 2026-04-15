import mongoose from "mongoose";

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ MongoDB connection successfull");
} catch (error) {
    console.log("❌ Connection Error: Failed to connect to mongoDB", error);
    process.exit(1); // code 1 means failed and code 0 means success
}
}

export default connectDB;