import { Component } from '@angular/core';
import { Movie } from 'src/types/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ratedMovies: Movie[] = this.moviesService.getMovies().ratedMovies;
  watchLaterMovies: Movie[] = this.moviesService.getMovies().watchLaterMovies;
  bannerMovie: Movie | undefined = this.getBannerMovie();
  
  constructor(private moviesService: MoviesService) { };

  getBannerMovie() {
    if (this.watchLaterMovies.length) {
      return this.watchLaterMovies.at(-1);
    }

    if (this.ratedMovies.length) {
      return this.ratedMovies.at(-1);
    }

    return;
  }
}
