import { useEffect, useState } from "react";
import fetchWeatherData from "../lib/weatherLib";
import HourlyWeatherDisplay from "./HourlyWeatherDisplay";

import "./Dashboard.css";

export default function WeatherControl(props) {
    const [weatherData, setWeatherData] = useState([]);
    const [is12HourFormat, setis12HourFormat] = useState(false);

    useEffect(() => {
        fetchWeatherData().then(response => setWeatherData(response));
    }, [])

    return (
        <div>
            <div className="bodyContainer">
                <div className="filterText"> Filters </div>
                <div className="buttonContainer">
                    <button className="filterButton"> Show 12 HR</button>
                    <button className="filterButton"> Show 24 HR</button>
                </div>
                <div className="headerContainer">
                    <h3>Hourly Weather Forecast</h3>
                </div>
                <div className="hourlyWeatherContainer">
                    {!is12HourFormat
                        ? <HourlyWeatherDisplay weatherData={weatherData} />
                        : <HourlyWeatherDisplay weatherData={weatherData} />
                    }
                </div>
            </div>
        </div>
    );
}