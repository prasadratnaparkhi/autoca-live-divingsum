import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface AnalyticsData {
  totalDistance: number;
  averageSpeed: number;
  tripCount: number;
  // Add other analytics properties here as needed
}

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  getCarAnalytics(): Observable<AnalyticsData> {
    // Simulate fetching data with a delay
    return of({
      totalDistance: 1587.25, // Example total distance in km
      averageSpeed: 45.6,    // Example average speed in km/h
      tripCount: 128,         // Example number of trips
      // Add other mock analytics data here
    }).pipe(delay(500)); // Simulate a 500ms network delay
  }
}
