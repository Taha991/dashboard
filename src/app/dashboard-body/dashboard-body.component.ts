import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements AfterViewInit  {
  @ViewChild('mychart') mychart: any;
  chart!: Chart;

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
            label: 'Data',
            data: [120, 90, 150 , 100 , 200 , 300],
            backgroundColor: '#FF7F5C)',
            borderColor: '#FF7F5C',
            borderWidth: 1,
            barThickness: 11, // Set the width of the bars to 11px

          },
        ],
      },
      options: {},
    });
  }
}
