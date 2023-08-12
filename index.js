const express = require("express");
const mongoose = require("mongoose");
const config = require("./Db/Config");
const cors = require("cors");
const app = express();
const Port = 4000;

// Use the JSON parsing middleware
app.use(express.json());

// Import UserRoute
const UserRoute = require("./Route/UserRoute");
const DailyCallRoute = require("./Route/AllAddMemberRoute");
// MongoDB URI
const mongoURI = config.dbUrl;

// Connect to MongoDB
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

connectToMongo();

// CORS options
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// Apply UserRoute under "/user" path
app.use("/user", UserRoute);
app.use("/add", DailyCallRoute);
// Default route
app.get("/", cors(corsOptions), (req, res) => {
  res.status(200).send("Development server is running.");
});

// Start the server
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
