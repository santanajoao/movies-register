import { Injectable } from '@angular/core';
import { Movie } from 'src/types/Movie';
import { getMovieIndexById } from 'src/utils/binarySearch';

@Injectable({
  providedIn: 'root'
})
export class MoviesService  {
  ratedMovies: Movie[] = this.getStorageMovies('ratedMovies');
  watchLaterMovies: Movie[] = this.getStorageMovies('watchLaterMovies');

  constructor() { };

  private getStorageMovies(storageKey: string): Movie[] {
    const json = localStorage.getItem(storageKey);
    const data = json && JSON.parse(json);

    if (data) return data;
    return [];
  }

  getMovies() {
    return {
      ratedMovies: this.ratedMovies,
      watchLaterMovies: this.watchLaterMovies,
    };
  }

  getMovieById(movieId: number): Movie | undefined {
    const ratedMovieIndex = getMovieIndexById(this.ratedMovies, movieId);
    if (ratedMovieIndex !== undefined) return this.ratedMovies[ratedMovieIndex];

    const watchLaterMovieIndex = getMovieIndexById(this.watchLaterMovies, movieId);
    if (watchLaterMovieIndex !== undefined) return this.watchLaterMovies[watchLaterMovieIndex];

    return undefined;
  }
}
