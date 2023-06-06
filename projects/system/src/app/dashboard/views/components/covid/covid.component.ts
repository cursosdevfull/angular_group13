import { Component } from '@angular/core';

import { DashboardApplication } from '../../../application/dashboard.application';

export interface DataGraph {
  name: string;
  value: number;
}

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent {
  view: [number, number] = [700, 450];
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showLegend = false;
  xAxisLabel = 'Countries';
  yAxisLabel = 'Cases confirmed';

  data: DataGraph[] = [];

  constructor(private readonly application: DashboardApplication) {}

  ngOnInit() {
    this.application.getDataCovid().subscribe((response) => {
      this.data = response.map((el) => ({
        name: el.country,
        value: el.casesConfirmed,
      }));
    });
  }
}
