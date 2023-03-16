export default function fetchWeatherData() {
    const  longitutde = "-84.387985";
    const latitude = "33.748997";
    const API_KEY = "80317ae7566d28e642a64c8676ffc9f8"

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${longitutde}&lon=${latitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            return data.list.map((item) => (
                {
                    time: item.dt_txt.split(" ")[1],
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