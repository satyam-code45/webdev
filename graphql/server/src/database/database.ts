import mongoose from "mongoose";

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url, {
      dbName: "your_db_name",
    });
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
};
