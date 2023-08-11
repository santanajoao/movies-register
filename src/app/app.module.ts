import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { StarRadioInputComponent } from './components/star-radio-input/star-radio-input.component';
import { PresentationBannerComponent } from './components/presentation-banner/presentation-banner.component';
import { AncorComponent } from './components/ancor/ancor.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieRegisterComponent } from './pages/movie-register/movie-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieBannerComponent,
    RatingInputComponent,
    StarRadioInputComponent,
    PresentationBannerComponent,
    AncorComponent,
    MovieListComponent,
    MovieRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
