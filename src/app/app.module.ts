import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WINDOW_PROVIDERS } from './window.service';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { QuoteModalService } from './quote-modal.service';
import { UnlocodeService } from './unlocode.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    ContactComponent,
    AboutComponent,
    TestimonialsComponent,
    QuoteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ WINDOW_PROVIDERS, QuoteModalService, UnlocodeService ],
  entryComponents: [ QuoteModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
