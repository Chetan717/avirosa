const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/Db/Config");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const Port = 4000;
const io = new Server(server);

// Use the JSON parsing middleware
app.use(express.json());

// Apply CORS middleware globally
app.use(
  cors({
    origin: [
      "https://aviad.vercel.app",
      "https://avp-one.vercel.app",
      "http://localhost:3000",
    ], // Change this to your frontend's URL
    optionsSuccessStatus: 200,
  })
);

// Import UserRoute
const UserRoute = require("./src/Route/UserRoute");
const DailyCallRoute = require("./src/Route/AllAddMemberRoute");
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

// Apply UserRoute under "/user" path
app.use("/user", UserRoute);
app.use("/add", DailyCallRoute);

// Default route
app.get("/", (req, res) => {
  res.send("we are live !");
});

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {});
});

// Start the server
server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
