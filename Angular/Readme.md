# 1.Temperature Converter

## Environment

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/-Y4byw48oCxRPaW0kiNlyA/temperature-converter.gif)

## Functionality Requirements

- It has 2 input number fields. The first is for a Celsius value, and the second is for a Fahrenheit value.

- Initially, both fields are empty.

- As a value is typed into the Celsius field, convert it to Fahrenheit and show it in the Fahrenheit field. Use the formula `F = C*9/5 + 32` for conversion. In case of decimals, show up to 1 decimal value.

- As a value is typed into the Fahrenheit field, convert it to Celsius and show it in the Celsius field. Use the formula `C = (F − 32) × 5/9` for conversion. In case of decimals, show up to 1 decimal value.

## Testing Requirements

- The Celsius input should have the data-test-id attribute 'celsius-input'.
- The Fahrenheit input should have the data-test-id attribute 'fahrenheit-input'.

## Project Specifications

**Read-only Files**

- src/app/temperatureConverter/temperatureConverter.component.spec.ts
- src/app/app.component.spec.ts
- src/app/app.component.ts
- src/app/app.module.ts

# 2.Angular: Weather Component

## Environment

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/aiYyB8bIMufQ00lpPduPbQ/weather-component.gif)

## Functionality Requirements

- An array of objects is passed as a prop to the component, where each object is a weather record for a single city. The object has 4 properties:

  1. name: The name of the city. [STRING]
  2. temperature: The temperature in the city. [STRING]
  3. wind: The wind in the city. [STRING]
  4. humidity: The humidity in the cit.y [STRING]

- There is an input field for the city name where the user can type the name of a city to search the weather data for. (The city name is case-insensitive.)

- If data exists for the typed input, render the weather details `<div>` as below, inside `<div data-test-id="weather-details">`.

  1. `<span data-test-id="output-temperature">{temperature}</span>`, where {temperature} is the value from the weather record.
  2. `<div data-test-id="output-wind">Wind: {wind}</div>`, where {wind} is the value from the weather record.
  3. `<div data-test-id="output-humidity">Humidity: {humidity}</div>`, where {humidity} is the value from the weather record.

- If no data exists for the typed input, do not render the weather details `<div>`, but instead render `<div data-test-id="no-results">No Results Found</div>`.

- At component render, since nothing is typed, do not render above 2 divs.

## Testing Requirements

- The city name input should have the data-test-id attribute 'app-input'.

- The `<div>` containing weather details should have the data-test-id attribute 'weather-details'.

- The `<span>` containing the temperature should have the data-test-id attribute 'output-temperature'.

- The `<div>` containing the wind information should have the data-test-id attribute 'output-wind'.

- The `<div>` containing the humidity information should have the data-test-id attribute 'output-humidity'.

- The 'No Results Found' `<div>` should have the data-test-id attribute 'no-results'.
