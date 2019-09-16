export const celsiusToFahrenheit = (temperature) => {
    if(isNaN(temperature)) {
        throw new Error("The temperature is not a number");
    }
    return (temperature * 9/5) + 32;
};