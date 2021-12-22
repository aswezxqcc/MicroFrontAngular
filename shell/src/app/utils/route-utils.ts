import { loadRemoteModule } from './federation-utils';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { Microfrontend } from '../core/services/microfrontends/microfrontend.types';

export function buildRoutes(options: Microfrontend[]): Routes {
  console.log('Microfrontend',options)
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m) => { console.log('loadRemoteModule',m,o.ngModuleName);return m[o.ngModuleName]}),
    canActivate: o.canActivate,
    pathMatch: 'full'
  }));

  return [
    ...APP_ROUTES,
    ...lazyRoutes
  ];
}
