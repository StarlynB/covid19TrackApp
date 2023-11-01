import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryModule } from './summary/summary.module';
import { AppComponent } from './app.component';
import { authGuard } from './guard/auth.guard';
import { NoFoundPageComponent } from './no-found-page/no-found-page.component';

/* The `loadChildren` property in the route configuration is used to lazy load( carga perezosa ) a module in Angular. */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule),
    canActivateChild: [authGuard]
  },
  {
    path: 'live',
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule),
    canActivateChild: [authGuard]
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
    canActivateChild: [authGuard]
  },
  {
    path: '**',
    redirectTo: '/NoFoundPage'
  },
  {
    path: 'NoFoundPage',
    component: NoFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
