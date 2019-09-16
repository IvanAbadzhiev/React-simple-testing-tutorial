import React from "react";
import App from "../App";
import WeatherCard from "../Components/WeatherCard";

import {shallow} from "enzyme";

let component;

beforeEach(() => {
    component = shallow(<App />);
})

test("It should render App.js", () => {
    expect(component.exists()).toBeTruthy();
});

test("It should render 4 Weather Cards", () => {
    expect(component.find(WeatherCard).length).toBe(4);
});

test("Celsius should be the default value", () => {
    expect(component.find("select").prop("value")).toBe("c");
});

test("It should change the measurement unit", () => {
    component.find('select').simulate('change', {target: { value : 'f'}});
    expect(component.find("select").prop("value")).toBe("f");
});