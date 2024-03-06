import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const appRoutes: Route[] = [    {
    path: '',
    // providers: [provideDummyShop()],
    component: LandingComponent
},
{
    path: 'home',
    // canMatch: [authGuard],
    // providers: [provideDummyShop()],
    loadComponent: () => 
        import('./home/home.component').then(m => m.HomeComponent)
},
{
    path: '**',
    redirectTo: '',
}];
