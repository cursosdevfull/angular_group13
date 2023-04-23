import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  private modeFullscreen: boolean = false;
  private modeObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  changeMode(mode: boolean) {
    this.modeFullscreen = mode;
    this.modeObs.next(mode);
  }

  getMode() {
    return this.modeObs.asObservable();
  }
}
