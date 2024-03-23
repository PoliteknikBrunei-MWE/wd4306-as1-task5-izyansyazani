import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'find-places',
    loadComponent: () => import('./find-places/find-places.page').then( m => m.FindPlacesPage)
  },
  {
    path: 'place-details',
    loadComponent: () => import('./place-details/place-details.page').then( m => m.PlaceDetailsPage)
  },
  {
    path: 'offers',
    loadComponent: () => import('./offers/offers.page').then( m => m.OffersPage)
  },
  {
    path: 'offer-details',
    loadComponent: () => import('./offer-details/offer-details.page').then( m => m.OfferDetailsPage)
  },
  {
    path: 'new-offer',
    loadComponent: () => import('./new-offer/new-offer.page').then( m => m.NewOfferPage)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./bookings/bookings.page').then( m => m.BookingsPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
];
