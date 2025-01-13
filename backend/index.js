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
});

async function readJson(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data); 
  } catch (err) {
    throw err; 
  }
}

app.get("/meals", async (req, res) => {
  console.log('enter')
  const meals = await readJson('./data/meals.json')
  console.log(meals)
  res.json(meals);
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001);
