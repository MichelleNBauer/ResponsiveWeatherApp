// Display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let date = document.querySelector("#current-date");

date.innerHTML = `${day} ${hours}:${minutes}`;

// Add a search engine: When searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function displayCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector(".search-bar");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCityName);
