function addWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { speed } = data.wind;
  const { humidity, temp } = data.main;

  const card = `<h1>Weather in ${name}</h1>
                <h1>${temp}</h1>
                <div class="status">
                <img
            src="https://openweathermap.org/img/wn/${icon}.png"
             alt=""
            class="icon"
                />
                <div class="description">${description}</div>
                </div>
                <h3>Humidity: ${humidity}%</h3>
                 <h3>Wind Speed: ${speed}km/h</h3>`;

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1920x1080/?" + name + "')";
    document.querySelector('.container .weather').innerHTML = card;
}

function getWeatherDetail(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=` +
      city +
      `&units=metric&appid=54da6ed082743e0af9e583fdcf0cf70c`
  )
    .then((response) => {
      if (!response.ok) {
        alert("Weather not found!");
      }
      return response.json();
    })
    .then((data) => addWeather(data));
}


const searchButton = document.querySelector('.container .search button');
const searchInput = document.querySelector('.container .search input');
searchButton.addEventListener('click', ()=>{
    getWeatherDetail(searchInput.value);
});

getWeatherDetail("Jakarta");
