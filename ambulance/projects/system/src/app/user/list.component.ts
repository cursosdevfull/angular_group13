import { Component } from '@angular/core';

@Component({
  selector: 'amb-list-user',
  template: `
    <table>
      <tr *ngFor="let user of users; let ind = index">
        <td>
          <amb-user>
            <span indexUser>{{ ind }}</span>
            <span nameUser>{{ user }}</span>
          </amb-user>
        </td>
      </tr>
    </table>
  `,
})
export class ListUserComponent {
  username = 'shidalgo';
  currentDate = new Date();

  users = [
    'shidalgo',
    'jgarcia',
    'jlopez',
    'jgomez',
    'jrodriguez',
    'jmartinez',
  ];
}
