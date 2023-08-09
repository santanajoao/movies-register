import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { StarRadioInputComponent } from './components/star-radio-input/star-radio-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieBannerComponent,
    RatingInputComponent,
    StarRadioInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
