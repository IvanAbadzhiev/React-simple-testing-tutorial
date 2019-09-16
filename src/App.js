import React, {useState} from "react";
import WeatherCard from "../src/Components/WeatherCard";

const weather = {
  monday : {
    city: "London",
    minTemp: 26,
    maxTemp: 31,
    wind: 23.12,
    icon: "cloudy-day-1"
  }, 
  tuesday : {
    city: "London",
    minTemp: 26,
    maxTemp: 29,
    wind: 33.12,
    icon: "thunder"
  }, 
  wednesday: {
    city: "London",
    minTemp: 19,
    maxTemp: 18,
    wind: 43.12,
    icon: "rainy-6"
  }, 
  thursday: {
    city: "London",
    minTemp: 10,
    maxTemp: 14,
    wind: 53.12,
    icon: "snowy-6"
  }
};

const App = () => {
  const [unit, setUnit] = useState("c");

  const handleUnitChange = (e) => {
    setUnit(e.target.value)
  }

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="https://motion-software.com/assets/images/motion-logo-2.svg" width="30" height="30" alt=""/>
          </a>

          <select value={unit} onChange={handleUnitChange}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
          </select>
      </nav>

      <div className="row">&nbsp;</div>

      <div className="row">
        <div className="col-sm-3">
          <WeatherCard {...weather.monday} unit={unit}/>
        </div>

        <div className="col-sm-3">
          <WeatherCard {...weather.tuesday} unit={unit}/>
        </div>

        <div className="col-sm-3">
          <WeatherCard {...weather.wednesday} unit={unit}/>
        </div>

        <div className="col-sm-3">
          <WeatherCard {...weather.thursday} unit={unit}/>
        </div>
      </div>
    </div>
  );
}

export default App;
