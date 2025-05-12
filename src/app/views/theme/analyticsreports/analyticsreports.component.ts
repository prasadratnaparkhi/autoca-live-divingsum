import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

interface ReportData {
  date: Date;
  duration: number; // in seconds
  distance: number; // in meters
}

@Component({
  selector: 'app-theme-analyticsreports',
  templateUrl: './analyticsreports.component.html',
  styleUrls: ['./analyticsreports.component.scss'],
  providers: [DatePipe] // Provide DatePipe
})
export class AnalyticsreportsComponent implements OnInit {

  reportData: ReportData[] = [];
  datePipe: DatePipe; // Declare DatePipe

  constructor(datePipe: DatePipe) { // Inject DatePipe
    this.datePipe = datePipe;
  }

  ngOnInit(): void {
    // Generate sample data
    [
  { date: new Date('2025-05-12'), duration: 1520, distance: 8730 },
  { date: new Date('2025-05-11'), duration: 2451, distance: 10325 },
  { date: new Date('2025-05-10'), duration: 3100, distance: 4990 },
  { date: new Date('2025-05-09'), duration: 1180, distance: 7120 },
  { date: new Date('2025-05-08'), duration: 2000, distance: 6670 },
  { date: new Date('2025-05-07'), duration: 2745, distance: 9430 },
  { date: new Date('2025-05-06'), duration: 3640, distance: 11100 }
]

    this.generateSampleData();
  }

  generateSampleData(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      this.reportData.push({
        date: new Date(today.setDate(today.getDate() - 1)),
        duration: Math.floor(Math.random() * 3600) + 600, // Random duration between 10min and 1hr
        distance: Math.floor(Math.random() * 10000) + 1000, // Random distance between 1km and 11km
      });
    }
  }

  formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let durationString = '';
    if (hours > 0) {
      durationString += `${hours}h `;
    }
    if (minutes > 0 || hours > 0) {
      durationString += `${minutes}m `;
    }
    durationString += `${remainingSeconds}s`;
    return durationString;
  }
}
