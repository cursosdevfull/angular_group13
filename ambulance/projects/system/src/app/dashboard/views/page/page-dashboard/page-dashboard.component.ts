import { Component } from '@angular/core';

import { LayoutService } from '../../../../config/services/layout.service';

@Component({
  selector: 'amb-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration = {
      header: true,
      footer: true,
      menu: true,
    };
  }
}
