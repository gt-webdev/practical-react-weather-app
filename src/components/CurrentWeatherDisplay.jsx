import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../lib/weatherLib";
import "./CurrentWeatherDisplay.css";

export default function CurrentWeatherDisplay() {
    /**
     * TASK #1: Reset this state, and render its values into the JSX for this component.
     */
    const [currentWeatherFahrenheit, setCurrrentWeatherFahrenheit] = useState({});

    /**
     * TASK #2: Reset this state, and conditionally render the JSX between this state and 
     * the currentWeatherFahrenheit when clicking on the button with className="mainTempLabel".
     */
    const [currentWeatherCelsius, setCurrentWeatherCelsius] = useState({});
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    return (
        <div className="container">
            <div className="textContainer">
                <h2>Atlanta</h2>
                <div className="imageContainer">
                    <img 
                        src={`https://openweathermap.org/img/wn/01d@2x.png`}
                        alt="Weather Icon"    
                    />
                    <button className="mainTempLabel" onClick={() => {/* toggle b/w °F and °C */}}>
                        <h1>41°F</h1>
                    </button>
                </div>
                <h4>42°F / 48°F -- Feels like 37°F</h4>
                <h4>Clear Sky</h4>
            </div>
        </div>
    );
}