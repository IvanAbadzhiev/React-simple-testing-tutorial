import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons'
import {celsiusToFahrenheit} from "../utils/helper";

const classes = {
    title: {
        margin: "0 auto",
        fontWeight: "600",
        fontSize: "1.5em"
    }
}

const WeatherCard = (props) => {
    // Convert to fahrenheit if needed
    const minTemp = props.unit === "f" ? celsiusToFahrenheit(props.minTemp) : props.minTemp;
    const maxTemp = props.unit === "f" ? celsiusToFahrenheit(props.maxTemp) : props.maxTemp;

    return (
        <div className="card">
            <div className="row">&nbsp;</div>
            <div className="row">
                <div className="card-title" style={classes.title}>{props.city}</div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <img src={`https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/${props.icon}.svg`} alt="" style={{width: "100%"}}/>
                </div>
            </div>

            <div className="row temperature">
                <div style={classes.title}> {minTemp}/{maxTemp}</div>
            </div>

            <div className="row wind">
                <div style={classes.title}>
                    <FontAwesomeIcon icon={faWind} /> {props.wind}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;