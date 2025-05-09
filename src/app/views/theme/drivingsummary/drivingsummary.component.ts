import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-theme-drivingsummary',
  templateUrl: './drivingsummary.component.html',
  styleUrls: ['./drivingsummary.component.scss']
})
export class DrivingsummaryComponent implements OnInit {
  gfg1: number = 30;
  gfg2: number = 50;

  ngOnInit() {
    setInterval(() => {
      this.gfg1 = Math.min(100, this.gfg1 + Math.floor(Math.random() * 10) + 1);
    }, 1500);
    setInterval(() => {
      this.gfg2 = Math.min(100, this.gfg2 + Math.floor(Math.random() * 10) + 3);
    }, 1500);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    FormsModule
  ],
  declarations: [
    DrivingsummaryComponent // Make sure to declare the component in the module
  ],
  exports: [
    DrivingsummaryComponent // Optionally export the component if other modules need to use it
  ]
})
export class DrivingsummaryModule { }