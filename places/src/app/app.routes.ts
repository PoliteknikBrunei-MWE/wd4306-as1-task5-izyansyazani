import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { AuthPage } from './auth/auth.page';
import { PlaceDetailsPage } from './place-details/place-details.page';
import { OffersPage } from './offers/offers.page';
import { PlacesPage } from './find-places/find-places.page';
import { BookingsPage } from './bookings/bookings.page';
import { NewOfferPage } from './new-offer/new-offer.page';
import { OfferDetailsPage } from './offer-details/offer-details.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthPage,
  },
  {
    path: 'bookings',
    component: BookingsPage,
  },
  {
    path: 'find-places',
    component: PlacesPage,
  },
  {
    path: 'new-offer',
    component: NewOfferPage,
  },
  {
    path: 'offer-details',
    component: OfferDetailsPage,
  },
  {
    path: 'offers',
    component: OffersPage,
  },
  {
    path: 'place-detail',
    component: PlaceDetailsPage,
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        component: PlacesPage,
      },
      {
        path: 'offers',
        component: OffersPage,
      },
    ],
  },
];
