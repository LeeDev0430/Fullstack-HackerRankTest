import { Component } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss'],
})
export class TemperatureConverter {
  celsius: number;
  fahrenheit: number;

  updateFahrenheit(celsiusValue: number): void {
    this.fahrenheit = parseFloat(((celsiusValue * 9) / 5 + 32).toFixed(1));
  }

  updateCelsius(fahrenheitValue: number): void {
    this.celsius = parseFloat((((fahrenheitValue - 32) * 5) / 9).toFixed(1));
  }
}
