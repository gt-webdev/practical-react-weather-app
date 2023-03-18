import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
    const { data } = props;
    return (
        <>
            <h3 className="forecastDisplayLabel">{props.label}</h3>
            <div className="forecastDisplayContainer">
                {/* 
                    TASK #3: The values of data need to be properly rendered here! 
                    Create a component to represent each item on this list and place them here.

                    The forecastDisplayContainer div will render once something has been placed here.
                */}
            </div>
        </>
    )
}