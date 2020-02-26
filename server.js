// Empty JS object to act as endpoint for all routes
projectData = [];
console.log("projectData", projectData);

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

// set a "port" variable
const port = 8000;

//set a variable named "server"
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// GET method  route

app.get("/all", (request, response) => {
  response.send(projectData);
});

// POST  method route

app.post("/add", (req, res) => {
  let newEntry = {
    date: req.body.date,
    temperature: req.body.temp,
    feelings: req.body.feelings,
    city: req.body.name,
    country: req.body.sys.country
  };
  projectData.push(newEntry);
  res.send(projectData);
});


