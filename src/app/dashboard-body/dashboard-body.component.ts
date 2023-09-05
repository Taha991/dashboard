import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements AfterViewInit {
  repeatCount = 2;
  currentView = 'chart';
  @ViewChild('mychart', { static: false }) mychart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarChart', { static: false }) radarChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  radarChartInstance!: Chart;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
    this.createRadarChart();
  }

  switchView(view: string) {
    this.currentView = view;

    // If switching back to the chart view, recreate the chart
    if (view === 'chart') {
      this.createChart();
    }
  }

  repeatArray(count: number): any[] {
    return new Array(count);
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy the existing chart instance
    }

    this.chart = new Chart(this.mychart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Station Dummy 1', 'Station Dummy 1', 'Station Dummy 1', 'Station Dummy 1', 'Station Dummy 1'],
        datasets: [
          {
            label: 'STATIONS ACTIVATES OVERVIEW',
            data: [120, 90, 150, 100, 200, 300],
            backgroundColor: '#FF7F5C',
            borderColor: '#FF7F5C',
            borderWidth: 1,
            barThickness: 11,
          },
        ],
      },
      options: {}
    });
  }

  createRadarChart(): void {
    if (this.radarChartInstance) {
      this.radarChartInstance.destroy(); // Destroy the existing radar chart instance
    }

    this.radarChartInstance = new Chart(this.radarChart.nativeElement, {
      type: 'radar',
      data: {
        labels: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: 'Data',
            data: [120, 90, 300, 100, 200, 300, 400],
            backgroundColor: '#009ACF',
            borderColor: '#009ACF33',
            borderWidth: 1,
            pointStyle: 'circle',
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
            enabled: false,
          },
        },
      },
    });
  }
}
