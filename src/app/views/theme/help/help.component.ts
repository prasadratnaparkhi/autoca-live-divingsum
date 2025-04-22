import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-theme-help',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  category: string = '';
  question: string = '';

  submitHelpRequest() {
    if (this.category && this.question) {
      console.log('Help Request Submitted:', { category: this.category, question: this.question });
      // In a real application, you would send this data to a service
      // to handle the help request.
      this.category = '';
      this.question = '';
    } else {
      alert('Please select a category and enter your question.');
    }
  }
}