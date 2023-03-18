import React from "react";

import "./Filters.css";

function FilterButton(props) {
  const handleClick = () => {
    props.setFilter(props.numDays);
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
        This app initally loads all weather conditions for the next 5 days, in timestamps of 3 hours. 
        We welcome you to filter out this timestamps based on the number of days from today!
      </p>
      <div className="filterContainer">
          <FilterButton 
            label={"1 Day"}  
            filter={props.filter} 
            setFilter={props.setFilter} 
            setData={props.setData} 
            numDays={1} 
          />
          <FilterButton 
            label={"2 Days"} 
            filter={props.filter} 
            setFilter={props.setFilter} 
            setData={props.setData} 
            numDays={2} 
          />
          <FilterButton 
            label={"3 Days"} 
            filter={props.filter} 
            setFilter={props.setFilter} 
            setData={props.setData} 
            numDays={3} 
          />
          <FilterButton 
            label={"4 Days"} 
            filter={props.filter} 
            setFilter={props.setFilter} 
            setData={props.setData} 
            numDays={4} 
          />
          <FilterButton 
            label={"5 Days"} 
            filter={props.filter} 
            setFilter={props.setFilter} 
            setData={props.setData} 
            numDays={5} 
          />
      </div>
    </div>
  )
}