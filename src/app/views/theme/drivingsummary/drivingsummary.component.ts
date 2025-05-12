import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

/**
 * @title Table with sorting, button, and form
 */
@Component({
  selector: 'app-theme-drivingsummary',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './drivingsummary.component.html',
  styleUrls: ['./drivingsummary.component.scss'],
})
export class DrivingsummaryComponent implements AfterViewInit {
  displayedColumns: string[] = ['drivedon', 'duration', 'distance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  newDrivedon: Date | null = null;
  newDuration: number | null = null;
  newDistance: number | null = null;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addItem() {
    if (this.newDrivedon && this.newDuration !== null && this.newDistance) {
      this.dataSource.data = [
        ...this.dataSource.data,
        {
          drivedon: new Date(this.newDrivedon),
          duration: this.newDuration,
          distance: this.newDistance,
        },
      ];

      // Reset form fields
      this.newDrivedon = null;
      this.newDuration = null;
      this.newDistance = null;
    }
  }
}

export interface DrivingRecord {
  drivedon: Date;
  duration: number;
  distance: number;
}

const ELEMENT_DATA: DrivingRecord[] = [
  { drivedon: new Date('2025-05-06'), distance: 10, duration: 60 },
  
  // Add more driving records here
];
