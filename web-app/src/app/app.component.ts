import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';

@Component({
  selector: 'app-root',
  imports: [SingleFileUploadComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-app';
}
