const apiKey = '4f1d2d10a176445a952122204241403';
const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=4f1d2d10a176445a952122204241403&q=india&aqi=no';

function searchWeather() {
    const location = document.getElementById('locationInput').value;

    fetch(apiUrl + location + '&appid=' + apiKey)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').textContent = 'City not found';
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <div id="weather-icon"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></div>
    `;
}
