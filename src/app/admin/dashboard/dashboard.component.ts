import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import *  as chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('dashboardChart') chartCanvas: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    let ctx = document.getElementById("myChart");
    //const ctx = this.chartCanvas.nativeElement.getContext('2d');
      const myChart = new chart.Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      });
  }
}