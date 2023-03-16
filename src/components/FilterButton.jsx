import React, { useState } from "react";

import "./FilterButton.css";

export default function FilterButton(props) {
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
