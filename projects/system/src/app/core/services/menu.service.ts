import { Injectable } from '@angular/core';

export interface IMenu {
  path: string;
  iconName: string;
  title: string;
}

export type Menu = IMenu[];

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly items: Menu = [
    { path: '/dashboard', iconName: 'dashboard', title: 'DASHBOARD' },
    { path: '/medic', iconName: 'settings_accesibility', title: 'MEDIC' },
    {
      path: '/driver',
      iconName: 'folder',
      title: 'DRIVER',
    },
    {
      path: '/history',
      iconName: 'storage',
      title: 'HISTORY',
    },
    {
      path: '/user',
      iconName: 'face',
      title: 'USER',
    },
  ];

  constructor() {}

  get listMenu(): Menu {
    return [...this.items];
  }
}
