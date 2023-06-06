import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
})
export class FormDriverComponent {
  driverSelected: any;

  constructor(
    private readonly driverService: DriverService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.driverService.driverSelected);
    this.driverSelected = this.driverService.driverSelected;
    console.log(this.activatedRoute);
  }
}
