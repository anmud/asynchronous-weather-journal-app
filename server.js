// Empty JS object to act as endpoint for all routes

projectData = {};

// TODO-Express to run server and routes

const express = require("express");

// TODO-Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance

const cors = require("cors");
app.use(cors());

// Initializing the main project folder
app.use(express.static("website"));

// TODO-set a "port" variable
const port = 8000;

//TODO-set a variable named "server"
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// GET method  route

app.get("/all", (request, response) => {
  res.status(200);
  response.send(projectData);
});

// POST  method route

app.post("/add", (req, res) => {
  let newData = req.body;
  projectData["date"] = newData.date;
  projectData["temperature"] = newData.temperature;
  projectData["city"] = newData.city;
  projectData["country"] = newData.country;
  projectData["feelings"] = newData.feelings;
  res.status(200);
  res.send(projectData);
});

