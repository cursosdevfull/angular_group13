import { Injectable } from '@angular/core';

import environmentConfig from '../../../assets/environment.json';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  readonly parameters;

  constructor() {
    this.parameters = environmentConfig;
  }
}
