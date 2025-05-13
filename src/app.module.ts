import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DigitaldocumentsComponent } from './app/views/theme/digitaldocuments/digitaldocuments.component';
import { HelpComponent } from './app/views/theme/help/help.component';
import { OdometerlogsComponent } from './app/views/theme/odometerlogs/odometerlogs.component';
import { PrivacypolicyComponent } from './app/views/theme/privacypolicy/privacypolicy.component';
import { ServicehistoryComponent } from './app/views/theme/servicehistory/servicehistory.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    AnalyticsreportsComponent,
    OdometerlogsComponent,
    ServicehistoryComponent,
    PrivacypolicyComponent,
    HelpComponent,

    DigitaldocumentsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule, // Make sure MatFormFieldModule is imported
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HighchartsChartModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }