const longitude = "-84.387985";
const latitude = "33.748997";
const API_KEY = "80317ae7566d28e642a64c8676ffc9f8"

function convertTime(timeString) {
    const timeArr = timeString.split(':');
    const minutes = timeArr[1];
    var hours = parseInt(timeArr[0]);
  
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    return hours + ':' + minutes + ' ' + amPm;
}

function convertKelvinToFahrenheit(kelvin) {
    return `${Math.round((kelvin - 273.15) * 9/5 + 32)}°F`;
}

export function fetchHourlyData() {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${longitude}&lon=${latitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.list);
            return data.list.map((item) => (
                {
                    time: convertTime(item.dt_txt.split(" ")[1]),
                    temp: item.main.temp,
                    condition: item.weather[0].main,
                    icon: item.weather[0].icon
                }
            ));
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function fetchCurrentWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            return {
                city: data.name,
                icon: data.weather[0].icon,
                condition: data.weather[0].description,
                temp: convertKelvinToFahrenheit(data.main.temp),
                min_temp: convertKelvinToFahrenheit(data.main.temp_min),
                max_temp: convertKelvinToFahrenheit(data.main.temp_max),
                feels_like: convertKelvinToFahrenheit(data.main.feels_like)
            }
        })
}
