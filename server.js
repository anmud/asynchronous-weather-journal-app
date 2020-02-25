// Empty JS object to act as endpoint for all routes 
projectData = {};
console.log('projectData', projectData)

// TODO-Express to run server and routes

const express = require('express');


// TODO-Start up an instance of app
const app = express();

// Dependencies 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initializing the main project folder 
app.use(express.static('website'));

// set a "port" variable
const port = 8000;

//set a variable named "server"
const server = app.listen(port, () => {console.log(`running on localhost: ${port}`)});

// GET  route

app.get('/all', (request, response)=> {
    response.send(projectData);
})


// POST  route

// app.post('/addData', (req, res) => {
//     let data = req.body;
//     projectData['temperature'] = data.temperature
// })

// const data = [];

// app.post('/wheather', (req,res) => {
//        let newData = req.body
//        let newEntry = {
//            temperature: newData.temperature,
//            date: newData.date,
//            userRes: newData.userRes,
//        }
//         data.push(newEntry);
// })


