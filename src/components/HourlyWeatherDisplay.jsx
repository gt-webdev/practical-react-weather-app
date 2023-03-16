import "./HourlyWeatherDisplay.css";

export default function HourlyWeatherDisplay(props) {
    return (
        <>
            {props.weatherData.map((item) => (
                <div className="weatherItem">
                    <div>
                        <p>
                            Time: {item.time}
                        </p>
                    </div>
                    <div>
                        <p>
                            Weather: {item.condition}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}