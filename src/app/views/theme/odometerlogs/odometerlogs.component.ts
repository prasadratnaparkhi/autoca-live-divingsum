import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface OdometerLog {
  date: Date;
  reading: number;
  place: string;
}

const ELEMENT_DATA: OdometerLog[] = [
  { date: new Date('2025-03-01'), reading: 10000, place: 'Initial reading' },
  { date: new Date('2025-03-15'), reading: 10500, place: 'Trip to Mumbai' },
  { date: new Date('2025-04-01'), reading: 11000, place: 'After service' },
  // Add more odometer log data here
];

@Component({
  selector: 'app-theme-odometerlogs',
  templateUrl: './odometerlogs.component.html',
  styleUrls: ['./odometerlogs.component.scss'],
})
export class OdometerlogsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'reading', 'place'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  newDate: Date | null = null;
  newReading: number | null = null;
  newPlace: string = '';

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addOdometerReading() {
    if (this.newDate && this.newReading !== null && this.newPlace) {
      const newLog: OdometerLog = {
        date: new Date(this.newDate),
        reading: this.newReading,
        place: this.newPlace,
      };

      this.dataSource.data = [...this.dataSource.data, newLog];

      // Reset form fields
      this.newDate = null;
      this.newReading = null;
      this.newPlace = '';
    } else {
      console.warn('Please fill in all the required fields.');
    }
  }
}
