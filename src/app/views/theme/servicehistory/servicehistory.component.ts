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
  selector: 'app-theme-servicehistory',
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
  templateUrl: './servicehistory.component.html',
  styleUrls: ['./servicehistory.component.scss'],
})
export class ServicehistoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['servicedon', 'kms', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  newServiceDate: Date | null = null;
  newKms: number | null = null;
  newType: string = '';

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addItem() {
    if (this.newServiceDate && this.newKms !== null && this.newType) {
      this.dataSource.data = [
        ...this.dataSource.data,
        {
          servicedon: new Date(this.newServiceDate),
          kms: this.newKms,
          type: this.newType,
        },
      ];

      // Reset form fields
      this.newServiceDate = null;
      this.newKms = null;
      this.newType = '';
    }
  }
}

export interface ServiceRecord {
  servicedon: Date;
  kms: number;
  type: string;
}

const ELEMENT_DATA: ServiceRecord[] = [
  { servicedon: new Date('2024-02-01'), kms: 1102, type: 'free' },
  { servicedon: new Date('2024-08-01'), kms: 3705, type: 'free' },
  { servicedon: new Date('2025-03-01'), kms: 6000, type: 'free' },
  { servicedon: new Date('2025-03-15'), kms: 6254, type: 'free' },
  { servicedon: new Date('2025-04-01'), kms: 6741, type: 'paid' },
  // Add more service records here
];
