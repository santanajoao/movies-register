import { Movie } from "src/types/Movie";

export const getMovieIndexById = (movieList: Movie[], id: number): number | undefined => {
  let start = 0;
  let end = movieList.length - 1;

  while (start <= end) {
    const middle = Math.trunc((end + start) / 2);

    const movie = movieList[middle];
    if (movie.id === id) return middle;

    if (movie.id > id) {
      end = middle - 1
    } else {
      start = middle + 1;
    }
  }

  return;
}
