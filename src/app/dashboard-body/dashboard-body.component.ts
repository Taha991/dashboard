import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements AfterViewInit  {
   // Track the current view (initially set to 'chart')
   repeatCount = 2; // Specify the number of times to repeat the component

   currentView = 'chart';
  @ViewChild('mychart') mychart: any;
  @ViewChild('radarChart') radarChart: any;
  chart!: Chart;

   // Function to switch views
   switchView(view: string) {
    this.currentView = view;
  }

  repeatArray(count: number): any[] {
    return new Array(count);
  }
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    Chart.register(...registerables);

    this.chart = new Chart(this.mychart.nativeElement, {
      type: 'bar', // Choose the chart type you need
      data: {
        labels: ['Station Dummy 1', 'Station Dummy 1', 'Station Dummy 1' , 'Station Dummy 1' ,'Station Dummy 1'],
        datasets: [
          {
            label: 'STATIONS ACTIVATES OVERVIEW',
            data: [120, 90, 150 , 100 , 200 , 300],
            backgroundColor: '#FF7F5C)',
            borderColor: '#FF7F5C',
            borderWidth: 1,
            barThickness: 11,

          },

        ],
      },
      options: {}
    });

    this.chart = new Chart(this.radarChart.nativeElement, {
      type: 'radar',
      data: {
        labels: ['24:00', '02:00', '04:00', '06:00', '08:00' , '10:00' , '12:00' , '14:00', '16:00' , '18:00' ,
      '20:00' , '22:00'],
        datasets: [
          {
            label: 'Data',
            data: [120, 90,300, 100, 200 , 300 , 400],
            backgroundColor: '#009ACF',
            borderColor: '#009ACF33',
            borderWidth: 1,
            pointStyle: 'circle', // You can use 'circle' to make it look like a radar point
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
      },
    });
  }
}
