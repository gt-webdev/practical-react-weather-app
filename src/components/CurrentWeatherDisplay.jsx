import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../lib/weatherLib";
import "./CurrentWeatherDisplay.css";

export default function CurrentWeatherDisplay() {
    const [currentWeather, setCurrrentWeather] = useState({});

    useEffect(() => {
        fetchCurrentWeather().then(response => setCurrrentWeather(response));
    }, []); 

    return (
        <div className="container">
            <div className="textContainer">
                <h2>{currentWeather.city}</h2>
                <div className="imageContainer">
                    <img 
                        src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
                        alt="Weather Icon"    
                    />
                    <h1>{currentWeather.temp}</h1>
                </div>
                <h4>{`${currentWeather.min_temp} / ${currentWeather.max_temp} -- Feels like ${currentWeather.feels_like}`}</h4>
                <h4>{currentWeather.condition}</h4>
            </div>
        </div>
    );
}