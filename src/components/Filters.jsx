import React, { useState } from "react";

import "./Filters.css";

function FilterButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
      setIsClicked(!isClicked);
  }

  return (
      <button 
          className="filterButton"
          onClick={handleClick}
      >
          {props.label}
      </button>
  )
}

/**
 * Filters is the parent component of two FilterButton components (shown above).
 */
export default function Filters() {
  return (
    <>
      <h2> Filters </h2>
      <p>We will be filtering data by </p>
      <div className="filterContainer">
          <FilterButton label={"12 hours"}/>
          <FilterButton label={"24 hours"}/>
      </div>
    </>
  )
}