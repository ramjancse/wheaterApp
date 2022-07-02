

const formElem = document.getElementById('form');
const cityNameElem = document.getElementById('city');
const nameElem = document.getElementById('name');
const typeElem = document.getElementById('type');
const tempTemp = document.getElementById('temp');
const speedElem = document.getElementById('speed');
const humidityElem = document.getElementById('humidity');
const cloudsElem = document.getElementById('humidity');
const feels_likeElem = document.getElementById('feels_like');
const pressureElem = document.getElementById('pressure');
const iconElem = document.getElementById('icon');


formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    

    const cityName = cityNameElem.value;
    const API_KEY = '1857f4ffd76aff90050188e7b0384241';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1857f4ffd76aff90050188e7b0384241`)
    .then((response) => response.json())
        .then((data) => {
            const type = data.weather[0].main;
            const name = data.name;
            const temp = (data.main.temp - 273).toFixed(2);
            const feels_like = (data.main.feels_like-273).toFixed(2);
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const clouds = data.clouds.all;
            const icon = data.weather[0].icon;
   

            nameElem.innerHTML = name;
            typeElem.innerHTML = type;
            tempTemp.innerHTML = `${temp}C`;
            feels_likeElem.innerHTML = `${feels_like}C`;
            pressureElem.innerHTML = `${pressure}Bar`;
            speedElem.innerHTML = windSpeed;
            humidityElem.innerHTML = humidity;
            cloudsElem.innerHTML = clouds;

            iconElem.src = `http://openweathermap.org/img/w/${icon}.png`;

            cityNameElem.value = '';
           
    })
    .catch((error)=>console.log(error));
});

