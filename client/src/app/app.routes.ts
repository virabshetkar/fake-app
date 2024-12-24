import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./onboarding/onboarding.routes').then((r) => r.routes),
  },
];
