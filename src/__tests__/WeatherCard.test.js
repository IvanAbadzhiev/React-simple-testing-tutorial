import React from "react";
import {shallow} from "enzyme";
import WeatherCard from "../Components/WeatherCard";

const props = {
    city: "London",
    unit: "c",
    minTemp: 12,
    maxTemp: 16,
    icon: "windy",
    wind: 32
};

test("It should render WeatherCard", () => {
    const component = shallow(<WeatherCard {...props} />);
    expect(component.exists()).toBeTruthy();
});

test("It should render the city name", () => {
    const component = shallow(<WeatherCard {...props} />);    
    expect(component.find(".card-title").contains("London")).toBe(true);
});

test("It should render the image of the weather", () => {
    const component = shallow(<WeatherCard {...props} />);    
    expect(component.find("img").prop("src")).toBe("https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/windy.svg");
});

test("It should show the min and max temperature", () => {
    const component = shallow(<WeatherCard {...props} />);
    expect(component.find(".temperature").contains(12)).toBe(true);
    expect(component.find(".temperature").contains(16)).toBe(true);
});

test("It should show the min and max temperature in fahrenheit", () => {
    props.unit = "f";
    const component = shallow(<WeatherCard {...props} />);
    expect(component.find(".temperature").contains(53.6)).toBe(true);
    expect(component.find(".temperature").contains(60.8)).toBe(true);
});

test("It should show the wind speed", () => {
    const component = shallow(<WeatherCard {...props} />);
    expect(component.find(".wind").contains(32)).toBe(true);
});