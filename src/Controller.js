import { useEffect, useState } from "react";
import Headbar from "./Headbar"
import "./Controller.css"
import Weather from "./Weather";

export default function WeatherController(props) {
    var [weatherData, setWeatherData] = useState([]);
    var [is12HourFormat, setis12HourFormat] = useState(false);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.748997&lon=-84.387985&appid=80317ae7566d28e642a64c8676ffc9f8")
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data['list'])
                console.log(weatherData)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            <Headbar />
            <div className="bodyContainer">
                <div> Filters </div>
                <div>
                    <button> Show 12 HR</button>
                    <button> Show 24 HR</button>
                </div>
                <div>
                    {!is12HourFormat
                        ? <Weather weatherData={weatherData} />
                        : <Weather weatherData={weatherData} />
                    }
                </div>
            </div>
        </div>
    );
}