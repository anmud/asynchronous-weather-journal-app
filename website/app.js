/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear();

// TODO-api setup

let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "aa5eafa2f7f5de08a32bf7cf535704c5";

// TODO-Chain async functions to GET weather data, then POST the resulting data and update the UI
const gatherData = event => {
  const feelings = document.getElementById("feelings").value;
  const zip = document.getElementById("zip").value;
    (zip === "" || zip === null)
    ? alert("Please, enter a zip code")
    : console.log("zip success");
  getWeatherData(baseURL, zip, apiKey)
  .then(data => {
    let apiData = {
      date: newDate,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      feelings: feelings,
    };
    postWeatherData("http://localhost:8000/add", apiData);
  })
  .then(updateUI)
};

document.getElementById("generate").addEventListener("click", gatherData);

// TODO-async GET request

const getWeatherData = async (baseURL, zip, apiKey) => {
  const res = await fetch(`${baseURL}${zip},us&appid=${apiKey}`);
  try {
    if (res.ok) {
        const data = await res.json();
        return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

// TODO-async POST request

const postWeatherData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// TODO-dynamically update UI

const updateUI = async () => {
  const request = await fetch('http://localhost:8000/all');
  try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = `Date: ${allData[allData.length - 1].date}`;
      document.getElementById('city').innerHTML = `City: ${allData[allData.length - 1].city}`;
      document.getElementById('country').innerHTML = `Country: ${allData[allData.length - 1].country}`;
      document.getElementById('temp').innerHTML = `Temperature: ${allData[allData.length - 1].temperature}`;
      document.getElementById('content').innerHTML = `You feel today: ${allData[allData.length - 1].feelings}`;
  }
  catch(error){
      console.log('error', error);
  }
}