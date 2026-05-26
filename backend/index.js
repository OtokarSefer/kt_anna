const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
  console.log("use 1")
  return
});

app.get("/meals", async (req, res) => {
  const mealsData = await fs.readFile('./data/meals.json', 'utf-8');
  const meals = JSON.parse(mealsData);
  res.json(meals);
  console.log("get")
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  else {
    res.status(404).json({ message: "Not found" });
  }
  console.log("use 2")
});

app.listen(3001);
