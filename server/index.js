import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/bookRouter.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// Middlewares
app.use(
  cors({
    origin: "https://book-collection-app-seven.vercel.app",
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/books", bookRouter);

// Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DataBase Connected");
    app.listen(process.env.PORT, () => console.log("Server Connected"));
  })
  .catch((err) => console.error(err));