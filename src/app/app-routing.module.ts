import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
  ,{ path: 'landing', component: LandingComponent }
  ,{ path: 'about', component: AboutComponent }
  ,{ path: 'contact', component: ContactComponent }
  ,{ path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
