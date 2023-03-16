import "./HourlyWeatherDisplay.css";

export default function HourlyWeatherDisplay(props) {
    return (
        <>
            {props.weatherData.map((item) => (
                <div className="weatherItem">
                    <div>
                        <p>
                            {item.time}
                        </p>
                        <img src={`https://openweathermap.org/img/wn/${item.icon}.png`}/>
                        <p>
                            {item.condition}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}