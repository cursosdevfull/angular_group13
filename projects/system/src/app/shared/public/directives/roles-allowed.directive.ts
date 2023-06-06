import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthApplication } from '../../../core/application/auth.application';
import { StorageApplication } from '../../../core/application/storage.application';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input('rolesAllowed') roles: string = '';
  listRolesAllowed: string[] = [];

  constructor(
    private readonly auth: AuthApplication,
    private readonly storage: StorageApplication,
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.listRolesAllowed = this.roles.split(',');
    this.execute();
  }

  execute() {
    const isUserAuthenticated = this.auth.statusUserLoggedIn();

    const rolesUser = this.storage.getFieldInToken('roles') as string[];
    const isUserAuthorized = rolesUser.some((role) =>
      this.listRolesAllowed.includes(role)
    );

    if (isUserAuthenticated && isUserAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
