const express = require("express");
const { join } = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const mainRouter = require("./routes/index.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/v1", mainRouter);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Render the client app
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server has been started");
});
