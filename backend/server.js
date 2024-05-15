import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

// used to be able to read the .env file variables
dotenv.config();

// used to be able to upload and update images
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//creates an instance of the Express framework, which allows you to build web applications using Node.js
const app = express();

// port assignment
const PORT = process.env.PORT || 8000;

app.use(cors());

// allows for parsing request body
app.use(express.json({ limit: "5mb" }));

// allows for parsing cookies
app.use(cookieParser());

// path for authentication routes, authRoutes is a middleware
app.use("/api/auth", authRoutes);

// path for user action routes,  userRoutes is a middleware
app.use("/api/users", userRoutes);

// path for user posts, postRoutes is a middleware
app.use("/api/posts", postRoutes);

// path for notification posts, postRoutes is a middleware
app.use("/api/notifications", notificationRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8000");
  connectMongoDB();
});
