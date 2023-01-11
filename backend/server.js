const express = require("express");
const dotEnv = require("dotenv");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
app.get("/", (req, res) => {
  res.send("server is running");
});

dotEnv.config({
  path: "backend/config/config.env",
});

//use middleware-------------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:5137",credentials: true,})
);
// router use..............

// db connect........
dbConnect();
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running port ${PORT}`);
  }
});
