export type Movie = {
  id: number;
  title: string;
  synopsis: string;
  banner?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}
