import { Component } from '@angular/core';
import { Fuel } from './model/fuel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mm95: number = 4603;
  mm100 = 4576;
  days: number = 31;
  sum1: number = 0;
  sum2: number = 0;
  month: string = 'Октомври';
  data: Fuel[] = [
    {
      day: 1,
      m95: 282.57,
      m100: 206.75,
      date: new Date(),
    },
    {
      day: 2,
      m95: 353.59,
      m100: 341.13,
      date: new Date(),
    },
    {
      day: 3,
      m95: 359.31,
      m100: 227.67,
      date: new Date(),
    },
    {
      day: 4,
      m95: 750.24,
      m100: 195.91,
      date: new Date(),
    },
    {
      day: 5,
      m95: 806.14,
      m100: 301.96,
      date: new Date(),
    },
    {
      day: 6,
      m95: 381.6,
      m100: 329.62,
      date: new Date(),
    },
    {
      day: 7,
      m95: 616.22,
      m100: 152.61,
      date: new Date(),
    },
    {
      day: 8,
      m95: 403.59,
      m100: 204.42,
      date: new Date(),
    },
    {
      day: 9,
      m95: 652.05,
      m100: 105.95,
      date: new Date(),
    },
    {
      day: 10,
      m95: 180.85,
      m100: 231.9,
      date: new Date(),
    },
    {
      day: 11,
      m95: 240.04,
      m100: 361.08,
      date: new Date(),
    },
    {
      day: 12,
      m95: 289.02,
      m100: 110.07,
      date: new Date(),
    },
    {
      day: 13,
      m95: 584.26,
      m100: 265.16,
      date: new Date(),
    },
    {
      day: 14,
      m95: 647.64,
      m100: 387.64,
      date: new Date(),
    },
    {
      day: 15,
      m95: 250.54,
      m100: 306.29,
      date: new Date(),
    },
    {
      day: 16,
      m95: 111.86,
      m100: 135.18,
      date: new Date(),
    },
    {
      day: 17,
      m95: 416.5,
      m100: 93.95,
      date: new Date(),
    },
    {
      day: 18,
      m95: 286.9,
      m100: 118.96,
      date: new Date(),
    },
    {
      day: 19,
      m95: 459.1,
      m100: 298.07,
      date: new Date(),
    },
    {
      day: 20,
      m95: 410.09,
      m100: 372.16,
      date: new Date(),
    },
    {
      day: 21,
      m95: 432.47,
      m100: 93.73,
      date: new Date(),
    },
    {
      day: 22,
      m95: 124.38,
      m100: 221.12,
      date: new Date(),
    },
    {
      day: 23,
      m95: 206.16,
      m100: 225.61,
      date: new Date(),
    },
    {
      day: 24,
      m95: 139.03,
      m100: 202.57,
      date: new Date(),
    },
    {
      day: 25,
      m95: 434.75,
      m100: 312.02,
      date: new Date(),
    },
    {
      day: 26,
      m95: 586.98,
      m100: 381.32,
      date: new Date(),
    },
    {
      day: 27,
      m95: 374.46,
      m100: 398.07,
      date: new Date(),
    },
    {
      day: 28,
      m95: 291.83,
      m100: 187.16,
      date: new Date(),
    },
    {
      day: 29,
      m95: 242.24,
      m100: 302.01,
      date: new Date(),
    },
    {
      day: 30,
      m95: 206.86,
      m100: 42.96,
      date: new Date(),
    },
    {
      day: 31,
      m95: 315.22,
      m100: 163.85,
      date: new Date(),
    },
  ];
  time = this.data[this.data.length - 1].date;
  sum95 = this.data.forEach((item) => {
    this.sum1 += Number(item.m95);
    console.log(this.sum1);
  });

  sum100 = this.data.forEach((item) => {
    this.sum2 += Number(item.m100);
    console.log(this.sum2);
  });
  flag100: boolean =
    this.sum2 - (this.mm100 * this.data.length) / this.days > 0;
  returnCondition(sum: number, fuel: number): string {
    return sum - (fuel * this.data.length) / this.days > 0
      ? 'сме наваксали с'
      : 'сме изостанали с';
  }
  condition95 = this.returnCondition(this.sum1, this.mm95);
  condition100 = this.returnCondition(this.sum2, this.mm100);
}
