import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { ratedMovies, watchLaterMovies } from 'src/data/movies';
import { Movie } from 'src/types/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) { };

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieId = Number(routeParams.get('movieId'));

    this.movie = this.moviesService.getMovieById(movieId);
  }

  handleRatingChange(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) return;

    const newRating = parseInt(event.target.value);
  }

  test(event: Event) {
    window.alert(event);
  }
}
