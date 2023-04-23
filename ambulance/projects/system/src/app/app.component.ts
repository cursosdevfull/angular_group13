import { Component } from '@angular/core';

import { ILayout } from './config/interfaces/layout.interface';
import { LayoutService } from './config/services/layout.service';
import { WaitService } from './shared/services/wait.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showWait: boolean = false;
  configLayout: ILayout;

  constructor(
    private readonly wait: WaitService,
    //private readonly fullscreen: FullscreenService
    private readonly layoutService: LayoutService
  ) {
    this.wait.getStatus().subscribe((status) => {
      this.showWait = status;
    });

    this.layoutService.configuration.subscribe((config) => {
      this.configLayout = config;
    });
  }
}
