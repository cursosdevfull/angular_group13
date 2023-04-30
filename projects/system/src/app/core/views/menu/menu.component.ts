import { Component } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(readonly menuService: MenuService) {}
}
