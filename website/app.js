/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// api setup

let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "aa5eafa2f7f5de08a32bf7cf535704c5";

// function called by the event listener
const gatherData = event => {
  const feelings = document.getElementById("feelings").value;
  const zip = document.getElementById("zip").value;
    (zip === "" || zip === null)
    ? alert("Please enter a valid zip code")
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
    postWeatherData("/add", apiData);
  })
 // .then(renderUI)
};

document.getElementById("generate").addEventListener("click", gatherData);

// GET

const getWeatherData = async (baseURL, zip, apiKey) => {
  const res = await fetch(`${baseURL}${zip},us&appid=${apiKey}`);
  try {
    if (res.ok) {
          const data = await res.json();
        console.log("data", data);
        return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

// POST

const postWeatherData = async (url = "", data = {}) => {
  console.log("data from post", data);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    console.log("newData", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

