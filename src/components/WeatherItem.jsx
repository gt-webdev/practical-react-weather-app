import "./WeatherItem.css";

export default function WeatherItem(props) {
    return (
        <div className="weatherItem">
            <p>
                {props.time}
            </p>
            <img 
                src={`https://openweathermap.org/img/wn/${props.icon}.png`}
                alt="weather icon"
                width={70}
            />
            <p>
                {props.condition}
            </p>
        </div>
    );
}