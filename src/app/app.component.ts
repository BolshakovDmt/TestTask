import { Options,  LabelType } from '@angular-slider/ngx-slider';
import { Component, EventEmitter } from '@angular/core';

interface SliderDetails {
  value: number;
  highValue: number;
  floor: number;
  ceil: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  manualRefreshEnabled: boolean = true;
  manualRefresh: EventEmitter<void> = new EventEmitter<void>();
  isCollapsed: boolean = true;
  minValue: number = 2016;
  maxValue: number = 2020;
  options: Options = {
    showTicksValues: true,
    animate: false, // animations works bad with slider
    stepsArray: [
      {value: 1, legend: 'January'},
      {value: 2, legend: 'February'},
      {value: 3, legend: 'March'},
      {value: 4, legend: 'April'},
      {value: 5, legend: 'May'},
      {value: 6, legend: 'June'},
      {value: 7, legend: 'July'},
      {value: 8, legend: 'August'},
      {value: 9, legend: 'September'},
      {value: 10, legend: 'October'},
      {value: 11, legend: 'November'},
      {value: 12, legend: 'December'}
    ]
  };
  sliders: SliderDetails[] = [
    {
      value: 2016,
      highValue: 2018,
      floor: 2014,
      ceil: 2023
    }]

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.manualRefreshEnabled) {
      // Bootstrap uses display CSS property to effect the collapse, so we need this to manually trigger a refresh
      this.manualRefresh.emit();
    }
  }

  sliderOptions(slider: SliderDetails): Options {
      showTicksValues: true
      return {
        floor: slider.floor,
        ceil: slider.ceil
      };
    }
  }
