import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { AuthPage } from './auth/auth.page';
import { PlaceDetailsPage } from './place-details/place-details.page';
import { OffersPage } from './offers/offers.page';
import { PlacesPage } from './find-places/find-places.page';

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
    path: 'place-detail',
    component: PlaceDetailsPage,
  },
  {
    path: 'offers',
    component: OffersPage,
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
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage,
  },
];
