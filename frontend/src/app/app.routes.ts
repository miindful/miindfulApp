import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResourcesComponent } from './resources/resources.component';
import { ForumComponent } from './forum/forum.component';
import { SupportComponent } from './support/support.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
  { path: 'resources', component: ResourcesComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'support', component: SupportComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: '' } // Fallback route
];
