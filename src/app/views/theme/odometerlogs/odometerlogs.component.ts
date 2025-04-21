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
  selector: 'app-theme-odometerlogs',
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
  templateUrl: './odometerlogs.component.html',
  styleUrls: ['./odometerlogs.component.scss'],
})
export class OdometerlogsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'date', 'reading', 'place'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  newPosition: number | null = null;
  newDate: Date | null = null;
  newReading: number | null = null;
  newPlace: string = '';

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addItem() {
    if (this.newPosition != null && this.newDate !== null && this.newReading != null && this.newPlace) {
      this.dataSource.data = [
        ...this.dataSource.data,
        {
          position: this.newPosition,
          date: new Date(this.newDate),
          reading: this.newReading,
          place: this.newPlace,
        },
      ];

      // Reset form fields
      this.newPosition = null;
      this.newDate = null;
      this.newReading = null;
      this.newPlace = '';
    }
  }
}

export interface ServiceRecord {
  position: number;
  date: Date;
  reading: number;
  place: string;
}

const ELEMENT_DATA: ServiceRecord[] = [
  { position: 1, date: new Date('2024-01-01'), reading: 1041, place: 'Pune' },
  { position: 2, date: new Date('2024-04-01'), reading: 2212, place: 'Mumbai' },
  { position: 3, date: new Date('2024-07-02'), reading: 3545, place: 'Pune' },
  { position: 3, date: new Date('2024-10-01'), reading: 4101, place: 'Pune' },
  { position: 3, date: new Date('2025-01-02'), reading: 5323, place: 'Pune' },
  // Add more service records here
];
