import { Injectable } from '@angular/core';
import { Movie } from 'src/types/Movie';
import { getMovieIndexById } from 'src/utils/binarySearch';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  ratedMovies: Movie[] = this.getStorageMovies('ratedMovies');
  watchLaterMovies: Movie[] = this.getStorageMovies('watchLaterMovies');
  lastId: number = this.getLastId(); 

  private getStorageMovies(storageKey: string): Movie[] {
    const json = localStorage.getItem(storageKey);
    const data = json && JSON.parse(json);

    if (data) return data;
    return [];
  }

  private getLastId() {
    const ratedLastId = this.ratedMovies.at(-1)?.id ?? 0;
    const watchLaterLastId = this.watchLaterMovies.at(-1)?.id ?? 0;
    return Math.max(ratedLastId, watchLaterLastId, 1) + 1;
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

  updateRating(movieId: number, newRate: Movie['rating']) {
    const ratedMovieIndex = getMovieIndexById(this.ratedMovies, movieId);
    const movieInRatedMovies = ratedMovieIndex !== undefined;
    if (movieInRatedMovies) {
      this.ratedMovies[ratedMovieIndex].rating = newRate;
      localStorage.setItem('ratedMovies', JSON.stringify(this.ratedMovies));
    } else {
      this.rateForFirstTime(movieId, newRate);
    }
  }

  rateForFirstTime(movieId: number, newRate: Movie['rating']) {
    const watchLaterMovieIndex = getMovieIndexById(this.watchLaterMovies, movieId);
    if (watchLaterMovieIndex === undefined) return;

    const newRatedMovie: Movie = {
      ...this.watchLaterMovies[watchLaterMovieIndex],
      rating: newRate,
      id: this.lastId,
    }
    this.lastId += 1;

    this.watchLaterMovies.splice(watchLaterMovieIndex, 1);
    localStorage.setItem('watchLaterMovies', JSON.stringify(this.watchLaterMovies));

    this.ratedMovies.push(newRatedMovie);
    localStorage.setItem('ratedMovies', JSON.stringify(this.ratedMovies));
  }

  addMovie(movie: Omit<Movie, 'id'>) {
    if (movie.rating) {
      this.ratedMovies.push({id: this.lastId, ...movie});
      localStorage.setItem('ratedMovies', JSON.stringify(this.ratedMovies));
    } else {
      this.watchLaterMovies.push({ id: this.lastId, ...movie});
      localStorage.setItem('watchLaterMovies', JSON.stringify(this.watchLaterMovies));
    }
    this.lastId += 1;
  }
}
