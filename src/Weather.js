import Headbar from "./Headbar"
import "./Weather.css"

export default function Weather(props) {
    return (
        <div>
            <Headbar />
            <div className="bodyContainer">
                I'm the Body Component
            </div>
        </div>
    );
}