import { useState, useEffect } from "react";
import { fetchHourlyData } from "./lib/weatherLib";
import CurrentWeatherDisplay from "./components/CurrentWeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import Filters from "./components/Filters";
import "./App.css";

export default function App() {
    const [hourlyData, setHourlyData] = useState([]);
    const [filter, setFilter] = useState(5);

    const filterData = (data, filterNum) => {
      return data.filter((item, index) => item.dateNum <= filterNum);
    }

    useEffect(() => {
        fetchHourlyData().then(response => {
          setHourlyData(filterData(response, filter))
        });
    }, [filter])

    return (
      <div className="App">
        <CurrentWeatherDisplay />
        <Filters filter={filter} setFilter={setFilter} setData={setHourlyData} />
        <ForecastDisplay data={hourlyData} label={"Hourly Forecast (5 days)"} />
      </div>
    );
}