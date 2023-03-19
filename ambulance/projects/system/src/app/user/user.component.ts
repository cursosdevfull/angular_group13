import { Component } from '@angular/core';

@Component({
  selector: 'amb-user', //<h1> <article> <div> <span> <p> <ul> <li> <a> <img> <input> <button>
  template: `
    <h4>
      <ng-content select="[indexUser]"></ng-content>
    </h4>
    <p>
      <ng-content select="[nameUser]"></ng-content>
    </p>
  `,
})
export class UserComponent {}
