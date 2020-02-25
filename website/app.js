/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// api setup

//let zip = document.querySelector('#zip').value;

//let baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}`
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let apiKey = '&appid=aa5eafa2f7f5de08a32bf7cf535704c5';

// document.getElementById('zip').addEventListener('keyup', e => {
//         let value = e.target.value;
//         let zip = `zip=${value}`;
//         getWeatherData(baseURL, zip, apiKey)
//         // .then(data => {
//         // postWeatherData(baseURL,apiKey, data)
//         // })
//     })

const someFunction = event => {
           let value = event.target.value;
           let zip = `zip=${value}`;
           let feelings = event.target.value;
           getWeatherData(baseURL, zip, apiKey)
           .then(data => {
             postWeatherData(baseURL, zip, apiKey, data, feelings)
           })

}

document.getElementById('zip').addEventListener('keyup', someFunction);
document.getElementById('generate').addEventListener('click', someFunction);

// document.getElementById('generate').addEventListener('click', performAction);

// GET

const getWeatherData = async (baseURL, zip, apiKey) => {
   const res = await fetch(baseURL + zip + apiKey)
   try {
     const data = await res.json();
     console.log('data',data)
     return data;
   } catch(error){
       console.log('error', error)
   }
}


// POST

const postWeatherData = async ( url = '/postData', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  },
    credentials: 'same-origin', 
    body: JSON.stringify(data),       
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
  
    }
};


// const feelings =  document.getElementById('feelings').value;

// console.log('feelings', feelings)
