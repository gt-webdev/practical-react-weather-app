const longitude = "-84.387985";
const latitude = "33.748997";
const API_KEY = "80317ae7566d28e642a64c8676ffc9f8"

// Converts time "HH:MM:SS" from 24-hour format to 12-hour format
function convertHourFormat(timeString) {
    const timeArr = timeString.split(':');
    const minutes = timeArr[1];
    var hours = parseInt(timeArr[0]);
  
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    return hours + ':' + minutes + ' ' + amPm;
}

// Converts dates of the format "YYYY-MM-DD" to the format "MM/DD/YYYY".
function convertDateFormat(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}/${year}`;
}

// Converts a kelvin value (number) to a string representing the same value in Fahrenheit.
function convertKelvinToFahrenheit(kelvin) {
    return `${Math.round((kelvin - 273.15) * 9/5 + 32)}°F`;
}

// Converts a kelvin value (number) to a string representing the same value in Celsius.
function convertKelvintToCelsius(kelvin) {
    return `${Math.round(kelvin - 273.15)}°C`;
}

export function fetchHourlyData() {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${longitude}&lon=${latitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            return data.list.map((item) => (
                {
                    time: convertHourFormat(item.dt_txt.split(" ")[1]),
                    date: convertDateFormat(item.dt_txt.split(" ")[0]),
                    condition: item.weather[0].main,
                    icon: item.weather[0].icon
                }
            ));
        })
        .catch((err) => {
            console.error(err.message)
        })
}

export function fetchCurrentWeather(isFahrenheit) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            return {
                city: data.name,
                icon: data.weather[0].icon,
                condition: data.weather[0].description,
                temp: isFahrenheit ? convertKelvinToFahrenheit(data.main.temp) : convertKelvintToCelsius(data.main.temp),
                min_temp: isFahrenheit ? convertKelvinToFahrenheit(data.main.temp_min) : convertKelvintToCelsius(data.main.temp_min),
                max_temp: isFahrenheit ? convertKelvinToFahrenheit(data.main.temp_max) : convertKelvintToCelsius(data.main.temp_max),
                feels_like: isFahrenheit ? convertKelvinToFahrenheit(data.main.feels_like) : convertKelvintToCelsius(data.main.feels_like)
            }
        })
}
