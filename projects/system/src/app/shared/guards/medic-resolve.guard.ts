import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicResolve implements Resolve<any> {
  data: any;

  constructor(private readonly http: HttpClient) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/photos')
        .pipe(delay(4000))
        .subscribe({
          next: (data) => {
            this.data = data;
            resolve(data);
          },
          error: (error) => reject(error),
        });
    });
  }
}
