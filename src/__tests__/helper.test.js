import {celsiusToFahrenheit} from "../utils/helper";

test("is the function for converting celsius exists", () => {
    expect(celsiusToFahrenheit).toBeDefined();
});

test("12 degrees celsius should be 53.6 fahrenheit", () => {
    expect(celsiusToFahrenheit(12)).toBe(53.6);
});

test("-10 degrees celsius should be 14 fahrenheit", () => {
    expect(celsiusToFahrenheit(-10)).toBe(14);
});

test("String values should throw an error", () => {
    expect(() => celsiusToFahrenheit("test")).toThrow("The temperature is not a number");
});