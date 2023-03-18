import "./WeatherItem.css";

export default function WeatherItem(props) {
    return (
        <div className="weatherItem">
            <p>{props.date}</p>
            <div>{props.time}</div>
            <img 
                src={`https://openweathermap.org/img/wn/${props.icon}.png`}
                alt="weather icon"
                width={70}
            />
            <p>{props.condition}</p>
        </div>
    );
}