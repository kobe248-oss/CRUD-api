require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const itemRoutes = require("./routes/items");

const app = express();


// Middleware
app.use(express.json());


// Routes
app.use("/items", itemRoutes);


// Root Route
app.get("/", (req, res) => {
  res.send("CRUD API is running...");
});


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });