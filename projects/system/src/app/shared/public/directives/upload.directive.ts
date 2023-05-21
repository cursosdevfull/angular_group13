import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[upload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onFileDropped: EventEmitter<File> = new EventEmitter<File>();
  /*   constructor(private readonly el: ElementRef) {}

  @HostListener('mouseenter') onMouseOver() {
    this.el.nativeElement.style.border = '1px dashed red';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.border = '1px solid #ccc';
  } */

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.onHover.emit(false);

    const files = evt.dataTransfer?.files;
    const fileSelected = files[0];

    this.onFileDropped.emit(fileSelected);
  }
}
