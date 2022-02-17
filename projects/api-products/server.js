import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import { productCtlr } from "./api/controllers/index.js";
import { productRouter, userRouter } from "./api/routes/index.js";

const { getAllProducts, getOneProduct, createProduct } = productCtlr;

/**
 * Mongoose
 */

// Connect to db
const dbConnection = process.env.DB_STRING_CONNECTION;
await mongoose.connect(dbConnection);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/**
 * Express
 */
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.use("/api", productRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Iniatialized server!!");
});
