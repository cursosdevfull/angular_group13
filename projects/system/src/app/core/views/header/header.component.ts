import { Component } from '@angular/core';

import { AuthApplication } from '../../application/auth.application';
import { StorageApplication } from '../../application/storage.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly username: string;

  constructor(
    private readonly auth: AuthApplication,
    private readonly storage: StorageApplication
  ) {
    this.username = this.storage.getFieldInToken('name');
  }

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}
