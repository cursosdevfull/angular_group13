import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { Subject } from 'rxjs';

import { UploadDirective } from '../../directives/upload.directive';

@Component({
  standalone: true,
  selector: 'amb-photo',
  imports: [
    UploadDirective,
    CommonModule,
    WebcamModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('file') file: ElementRef;

  showHover: boolean = false;
  isUsingWebcam = false;

  triggerSnapshot = new Subject<void>();

  onFileDropped(file: File) {
    if (!file.type.startsWith('image') || file.size > 5000000) return;

    const reader = new FileReader();
    reader.onloadend = (response: any) => {
      const base64 = response.target.result;
      this.loadPhotoFromUrlOrDataUrl(base64);
    };

    reader.readAsDataURL(file);
  }

  loadPhotoFromUrlOrDataUrl(urlOrPath: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${urlOrPath})`;
  }

  loadImage() {
    this.file.nativeElement.click();
  }

  selectImage(event: any) {
    const file: File = event.target.files[0];
    this.onFileDropped(file);
  }

  changeOriginPhoto(event: MatSlideToggleChange) {
    this.isUsingWebcam = !this.isUsingWebcam;
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  triggerAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  onImageCapture(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/png' }))
      .then((file) => {
        this.onFileDropped(file);
        this.isUsingWebcam = false;
      });
  }
}
