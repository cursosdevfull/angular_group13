import { Component } from '@angular/core';

import { DashboardApplication } from '../../../application/dashboard.application';
import { DataGraph } from '../covid/covid.component';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent {
  view: [number, number] = [500, 450];
  legend = true;
  legendPosition = 'right';
  legendTitle = 'Vaccums';
  gradient: true;
  doughnut = true;

  data: DataGraph[] = [];

  constructor(private readonly application: DashboardApplication) {}

  ngOnInit() {
    this.application.listen('dataupdate').subscribe((response) => {
      this.data = response;
    });
  }
}
