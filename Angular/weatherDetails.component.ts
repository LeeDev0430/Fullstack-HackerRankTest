import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss'],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  public selectedCityWeather: data | undefined;
  public cityInput: string = '';

  ngOnInit() {
    this.selectedCityWeather = undefined; // Ensures no city is selected on initial render
  }

  searchWeather() {
    if (!this.cityInput) {
      this.selectedCityWeather = undefined; // Clears the selection when input is empty
      return;
    }

    const citySearch = this.cityInput.trim().toLowerCase();
    this.selectedCityWeather = this.weatherData.find(
      (city) => city.name.toLowerCase() === citySearch
    );
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
