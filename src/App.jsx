import { useState, useEffect } from "react";
import { fetchHourlyData } from "./lib/weatherLib";
import CurrentWeatherDisplay from "./components/CurrentWeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import Filters from "./components/Filters";
import "./App.css";

export default function App() {
    /**
     * Maintains state for a list of objects, each containing values related to a 3-hour forecast
     * throughout the coming five days.
     */ 
    const [hourlyData, setHourlyData] = useState([]);

    useEffect(() => {
        fetchHourlyData().then(response => setHourlyData(response));
    }, [])

    return (
      <div className="App">
        <CurrentWeatherDisplay />
        <Filters />
        <ForecastDisplay data={hourlyData} label={"Hourly Forecast (5 days)"} />
      </div>
    );
}