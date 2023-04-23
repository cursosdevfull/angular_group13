import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

import { LayoutService } from '../../../../config/services/layout.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent {
  options: AnimationOptions = {
    path: '/assets/lotties/data.json',
  };

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration = {
      header: false,
      footer: false,
      menu: false,
    };
  }
}
