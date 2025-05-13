import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-theme-analyticsreports',
  templateUrl: './analyticsreports.component.html',
  styleUrls: []
})
export class AnalyticsreportsComponent implements OnInit {
  chart: any;

  // Sample data for the bar graph
  data = [
    { date: '2022-01-01', distance: 10 },
    { date: '2022-01-02', distance: 20 },
    { date: '2022-01-03', distance: 30 },
    { date: '2022-01-04', distance: 40 },
    { date: '2022-01-05', distance: 50 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createBarGraph();
  }

  // Create the bar graph
  createBarGraph(): void {
    Highcharts.chart('bar-graph', {
  chart: {
    type: 'column' // <-- this is critical
  },
  title: {
    text: 'Trip Distances'
  },
  xAxis: {
    categories: ['Feb 1', 'Feb 15', 'Mar 1', 'Mar 14', 'Mar 29']
  },
  yAxis: {
    title: {
      text: 'Distance (km)'
    }
  },
  series: [{
    name: 'Distance',
    type: 'column', // <-- must be declared
    data: [10, 8, 5, 15, 12]
  }]
});

  }
}
