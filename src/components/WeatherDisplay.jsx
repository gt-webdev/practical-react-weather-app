import "./WeatherDisplay.css"

export default function WeatherDisplay() {
    return (
        <div className="container">
            <div className="textContainer">
                <h3>Atlanta</h3>
                <div className="imageContainer">
                    <img 
                        src={`https://openweathermap.org/img/wn/10d@2x.png`}
                        alt="Weather Icon"    
                    />
                    <h1>
                        62°F
                    </h1>
                </div>
                <h4>Thursday, March 16</h4>
            </div>
        </div>
    );
}