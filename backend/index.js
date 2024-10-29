const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/index.js");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/v1", mainRouter);
app.listen(PORT, () => {
  console.log("Server has been started");
});
