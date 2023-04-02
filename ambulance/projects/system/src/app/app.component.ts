import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'system';

  dataLoaded = false;

  constructor() {
    setTimeout(() => {
      this.dataLoaded = true;
      this.title = "App Name"
    }, 3000);
  }
}
