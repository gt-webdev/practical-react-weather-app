import ForecastItem from "./ForecastItem";
import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
    return (
        <>
            <h3 className="forecastDisplayLabel">{props.label}</h3>
            <div className="forecastDisplayContainer">
                {props.data.map((item) => (
                    <ForecastItem 
                        date={item.date}
                        time={item.time} 
                        icon={item.icon}
                        condition={item.condition}
                        key={`${item.date} - ${item.time}`}
                    />
                ))}
            </div>
        </>
    )
}