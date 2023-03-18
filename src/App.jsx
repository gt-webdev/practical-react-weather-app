import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchHourlyData } from "./lib/weatherLib";
import CurrentWeatherDisplay from "./components/CurrentWeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import Filters from "./components/Filters";
import "./App.css";

function App() {
    const [hourlyData, setHourlyData] = useState([]);

    useEffect(() => {
        fetchHourlyData().then(response => setHourlyData(response));
        fetchCurrentWeather();
    }, [])

    return (
      <div className="App">
        <CurrentWeatherDisplay />
        <Filters/>
        <ForecastDisplay data={hourlyData} label={"Hourly"}/>
      </div>
    );
}

export default App;