const express = require("express");
const core = require("cors");
const mongoose = require("mongoose");
const app = express();
const allRouter = require("./routes/allRouters");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.use(core());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("data base is connected");
  })
  .catch((error) => {
    console.log("not Connected");
  });

app.use(allRouter);

app.listen(8080, () => {
  console.log("server is run");
});
