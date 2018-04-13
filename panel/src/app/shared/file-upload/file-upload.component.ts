import { Component, ChangeDetectionStrategy , OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent   {
  column: number;
  @Input() data: any[];

	uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
    });
    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;
    
    // Angular2 File Upload
    fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e; 
    }

    fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
    }
  }