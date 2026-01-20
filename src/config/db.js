import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "express_app" });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};
