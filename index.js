const express = require("express");
const doctors = require("./sample"); /// simulatin data fro a database

const app = express(); // creating an express app
// define our routes/different URIs
app.get("/", (req, res) => {
  // localhost:3003
  res.render("index.ejs", { doctors: doctors.slice(0, 6) });
});
app.get("/contact", (req, res) => {
  // localhost:3003/contact
  res.render("contact.ejs");
});
app.get("/doctors", (req, res) => {
  // // localhost:3003/doctors
  res.render("doctors.ejs", { doctors: doctors });
});
//Start the app
app.listen(3003, () => console.log("app running on port 3003"));
