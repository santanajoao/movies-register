import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieRegisterComponent } from './pages/movie-register/movie-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/register', component: MovieRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
