import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay } from 'rxjs';

export const MedicResolveNew = () => {
  const http = inject(HttpClient);

  return new Promise((resolve, reject) => {
    http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(delay(1000))
      .subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (error) => reject(error),
      });
  });
};
