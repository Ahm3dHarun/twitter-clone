import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error("Error connection to mongodb: " + String(error.message));
    process.exit(1);
  }
};

export default connectMongoDB;
