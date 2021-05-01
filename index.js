const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Feedback = require("./models/schema");
const bodyParser = require("body-parser");
const hello = "hello";
const app = express();

mongoose.connect("mongodb://localhost/feedbackdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to feedbackdb...");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("survey");
});

app.post("/", async (req, res) => {
  // const feedback = new Feedback(req.body);
  // await Feedback.deleteMany();
  // await feedback.save();
  console.dir(req.body);
  res.render("postSub");
});

app.listen(3000, () => {
  console.log("Server started on PORT 3000");
});
