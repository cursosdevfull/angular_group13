import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import * as io from 'socket.io-client';

import { DashboardRepository } from '../domain/repositories/dashboard.repository';
import { ApiCovid, CovidDto, DataCovid } from './dtos/api-covid.dto';

@Injectable({ providedIn: 'root' })
export class DashboardService implements DashboardRepository {
  private socket: io.Socket;

  constructor(private readonly http: HttpClient) {
    this.socket = io.connect('https://p7inv.sse.codesandbox.io/');
  }

  getCovidData(): Observable<DataCovid[]> {
    return this.http
      .get<ApiCovid[]>('http://localhost:8080')
      .pipe(map((data) => CovidDto.fromApiToData(data)));
  }

  listen(eventName: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on(eventName, (data: any) => observer.next(data));
    });
  }
}
