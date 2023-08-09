import { Component, OnInit } from '@angular/core';
import { ratedMovies, watchLaterMovies } from 'src/data/movies';
import { Movie } from 'src/types/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ratedMovies = this.getStorageMovies('ratedMovies') as Movie[];
  watchLaterMovies = this.getStorageMovies('watchLaterMovies') as Movie[];
  bannerMovie: Movie | undefined = this.getBannerMovie();
  
  getStorageMovies(key: string) {
    const json = localStorage.getItem(key);
    const data = json && JSON.parse(json);

    if (data && Array.isArray(data)) {
      return data;
    }

    return [];
  }

  getBannerMovie() {
    if (this.watchLaterMovies.length) {
      return this.watchLaterMovies.at(-1);
    }

    if (this.ratedMovies.length) {
      return this.ratedMovies.at(-1);
    }

    return undefined;
  }
}
