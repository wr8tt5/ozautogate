import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
