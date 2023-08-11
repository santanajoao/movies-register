import { Injectable } from '@angular/core';
import { Movie } from 'src/types/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService  {
  ratedMovies: Movie[] = this.getStorageMovies('ratedMovies');
  watchLaterMovies: Movie[] = this.getStorageMovies('watchLaterMovies');

  constructor() { }

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
}
