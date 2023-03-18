import WeatherItem from "./WeatherItem";
import "./ForecastDisplay.css";

export default function WeatherDisplay(props) {
    return (
        <>
            <h3 className="forecastDisplayLabel">{props.label}</h3>
            <div className="forecastDisplayContainer">
                {props.data.map((item) => (
                    <WeatherItem 
                        time={item.time} 
                        icon={item.icon}
                        condition={item.condition}
                    />
                ))}
            </div>
        </>
    )
}