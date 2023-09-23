const apiKey = '84c0bb08cb16eab107563a4e89ef399b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector('.error').style.display = 'flex';
    } else {

        let data = await response.json();

        document.querySelector('.weather-description').innerHTML = data.weather[0].description;
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
        document.querySelector('.feels-like span').innerHTML = Math.round(data.main.feels_like) + "°C";
        document.querySelector('.wind span').innerHTML = data.wind.speed + " MPH ";
        document.querySelector('.humidity span').innerHTML = data.main.humidity + "%";
        document.querySelector('.error').style.display = 'none';
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
