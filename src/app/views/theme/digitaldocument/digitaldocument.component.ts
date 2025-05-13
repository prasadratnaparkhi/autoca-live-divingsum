import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-digitaldocument',
  templateUrl: './digitaldocument.component.html',
  styleUrls: ['./digitaldocument.component.scss']
})
export class DigitaldocumentComponent {
  selectedFile: File | null = null;
  uploadMessage: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadMessage = '';
    }
  }

  onUpload(): void {
    if (!this.selectedFile) {
      this.uploadMessage = 'No file selected.';
      return;
    }

    // Simulate upload
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // Here you would normally call a service
    console.log('Uploading file:', this.selectedFile.name);

    // Simulate success
    this.uploadMessage = `File "${this.selectedFile.name}" uploaded successfully!`;
    this.selectedFile = null;
  }
}
