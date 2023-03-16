export default function Weather(props) {
    var weatherData = props.weatherData
    console.log(weatherData)
    return (
        <div>
            {
                Object.keys(weatherData).forEach((key) => {
                    <div>
                        <div>
                            <h1>
                                Time: {weatherData[key].dt_txt}
                                {console.log(weatherData[key].dt_txt)}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Weather: {weatherData[key].weather}
                            </h1>

                        </div>
                    </div>
                })
            }
        </div>
    )
}