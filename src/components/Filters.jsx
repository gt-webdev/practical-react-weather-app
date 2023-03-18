import { useState } from "react";

import "./Filters.css";

/**
 * TASK #4: Have these buttons filter the hourly forecast data to be 
 * rendered on your screen!
 */
function FilterButton(props) {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
      <button className="filterButton" onClick={handleClick}>
          {props.label}
      </button>
  )
}

/**
 * Filters is the parent component of two FilterButton components (shown above).
 */
export default function Filters(props) {
  return (
    <div className="container">
      <h2> Filters </h2>
      <p>
        This app initially loads all weather conditions for the next 5 days, in timestamps of 3 hours. 
        We welcome you to filter out this timestamps based on the number of days from today!
      </p>
      <div className="filterContainer">
          <FilterButton label={"1 Day"} />
          <FilterButton label={"2 Days"} />
          <FilterButton label={"3 Days"} />
          <FilterButton label={"4 Days"} />
          <FilterButton label={"5 Days"} />
      </div>
    </div>
  )
}