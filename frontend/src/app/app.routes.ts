import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
  { path: 'article1', component: Article1Component },
  { path: 'article2', component: Article2Component },
  { path: '**', redirectTo: '' } // Fallback route
];
