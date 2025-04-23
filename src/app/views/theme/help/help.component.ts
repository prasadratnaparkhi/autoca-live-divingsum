import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

/**
 * @title Table with sorting, button, and form
 */
@Component({
  selector: 'app-theme-help',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,  
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'category', 'question'];
  dataSource = new MatTableDataSource<ServiceRecord>(ELEMENT_DATA);

  newDate: Date | null = null;
  newCategory: string = '';
  newQuestion: string = '';

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addItem() {
    if (this.newDate && this.newCategory.trim() && this.newQuestion.trim()) {
      this.dataSource.data = [
        ...this.dataSource.data,
        {
          Date: new Date(this.newDate),
          category: this.newCategory.trim(),
          question: this.newQuestion.trim(),
        },
      ];

      // Reset form fields
      this.newDate = null;
      this.newCategory = '';
      this.newQuestion = '';
    }
  }
}

export interface ServiceRecord {
  Date: Date;
  category: string;
  question: string;
}

const ELEMENT_DATA: ServiceRecord[] = [
  { Date: new Date('2024-02-01'), category: 'Ask an expert', question: 'vehicle broke down' },
  { Date: new Date('2024-04-05'), category: 'Ask an expert', question: 'vehicle tyre puncture'},
  { Date: new Date('2024-07-15'), category: 'Ask an expert', question: 'vehicle overheating issues'}
];
