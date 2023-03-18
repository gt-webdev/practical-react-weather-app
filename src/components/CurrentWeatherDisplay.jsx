import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../lib/weatherLib";
import "./CurrentWeatherDisplay.css";

export default function CurrentWeatherDisplay() {
    const [currentWeatherFahrenheit, setCurrrentWeatherFahrenheit] = useState({});
    const [currentWeatherCelsius, setCurrentWeatherCelsius] = useState({});
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    useEffect(() => {
        fetchCurrentWeather(true).then(response => setCurrrentWeatherFahrenheit(response));
        fetchCurrentWeather(false).then(response => setCurrentWeatherCelsius(response));
    }, []); 

    return (
        <div className="container">
            <div className="textContainer">
                <h2>{currentWeatherFahrenheit.city}</h2>
                <div className="imageContainer">
                    <img 
                        src={`https://openweathermap.org/img/wn/${currentWeatherFahrenheit.icon}@2x.png`}
                        alt="Weather Icon"    
                    />
                    <button className="mainTempLabel" onClick={() => setIsFahrenheit(!isFahrenheit)}>
                        {isFahrenheit ? <h1>{currentWeatherFahrenheit.temp}</h1> : <h1>{currentWeatherCelsius.temp}</h1>}
                    </button>
                </div>
                {isFahrenheit ? (
                    <>
                        <h4>{`${currentWeatherFahrenheit.min_temp} / ${currentWeatherFahrenheit.max_temp} -- Feels like ${currentWeatherFahrenheit.feels_like}`}</h4>
                        <h4>{currentWeatherFahrenheit.condition}</h4>
                    </>
                ) : (
                    <>
                        <h4>{`${currentWeatherCelsius.min_temp} / ${currentWeatherCelsius.max_temp} -- Feels like ${currentWeatherCelsius.feels_like}`}</h4>
                        <h4>{currentWeatherCelsius.condition}</h4>
                    </>
                )}
            </div>
        </div>
    );
}