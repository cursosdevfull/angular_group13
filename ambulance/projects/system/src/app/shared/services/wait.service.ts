import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaitService {
  private status: boolean = false;
  private obsStatus: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  changeStatus(status: boolean): void {
    this.status = status;
    this.obsStatus.next(this.status);
  }

  getStatus() {
    return this.obsStatus.asObservable();
  }
}
