import { CanDeactivateFn } from '@angular/router';

import { IDeactivate } from '../../medic/views/components/deactivate.interface';

export const deactivateGuard: CanDeactivateFn<unknown> = (
  component: IDeactivate,
  currentRoute,
  currentState,
  nextState
) => {
  const response = component.validateInformationBeforeExit();
  console.log('deactivateGuard');
  return response;
};
