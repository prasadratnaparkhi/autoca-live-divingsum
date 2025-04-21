import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentRecord[] = [];

  constructor() {}

  addDocument(document: DocumentRecord) {
    this.documents.push(document);
  }

  getDocuments(): DocumentRecord[] {
    return this.documents;
  }
}

export interface DocumentRecord {
  id: number;
  name: string;
  date: Date;
  file: File;
}
