import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { environment } from 'projects/system/src/environments/environment';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent {
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('file') file: ElementRef;
  @Input() photoByDefault: string;

  showHover: boolean = false;
  isUsingWebcam = false;

  triggerSnapshot = new Subject<void>();

  value: File;
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: File): void {
    if (value) this.value = value;
  }

  onFileDropped(file: File) {
    if (!file.type.startsWith('image') || file.size > 5000000) return;

    this.onChange(file);
    this.onTouched();

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

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const pathImage = `${environment.apiPath}/photos/${this.photoByDefault}`;
      this.loadPhotoFromUrlOrDataUrl(pathImage);
    }
  }
}
