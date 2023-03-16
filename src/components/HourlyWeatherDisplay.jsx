

export default function HourlyWeatherDisplay(props) {
    return (
        <div>
            {
                props.weatherData.map((item) => (
                    <div>
                        <div>
                            <h1>
                                Time: {item.time}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Weather: {item.condition}
                            </h1>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}