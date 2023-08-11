import { Movie } from "src/types/Movie";

export const ratedMovies: Movie[] = [
  {
    id: 1,
    title: 'Invocação do Mal',
    synopsis: 'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',
    banner: 'https://ultimatodobacon.com/static/0294f0cd9a69d9780ef8812aa167620a/b4acf/Invocac%25CC%25A7a%25CC%2583o-do-Mal.jpg',
    rating: 5,
  },
  {
    id: 2,
    title: 'Invocação do Mal 2',
    synopsis: 'Os famosos demonologistas Lorraine e Ed Warren viajam até o norte de Londres. Lá, eles ajudam uma mãe solteira que cria quatro filhos sozinha em uma casa atormentada por espíritos malignos.',
    banner: 'https://www.portaldoholanda.com.br/sites/default/files/portaldoholanda-696515-imagem-foto-amazonas.jpg',
    rating: 5,
  },
];

export const watchLaterMovies: Movie[] = [
  {
    id: 3,
    title: 'Trem Bala',
    synopsis: 'Em um trem-bala indo rapidamente de Tóquio a Morioka, cinco assassinos profissionais descobrem que possuem o mesmo objetivo.',
    banner: 'https://i0.wp.com/thefanboyseo.com/wp-content/uploads/2022/06/bullet-train-movie-banner.jpg?resize=1500%2C438&ssl=1',
  },
  {
    id: 4,
    title: 'John Wick',
    synopsis: 'John Wick é uma franquia de mídia de suspense e ação neo-noir americana criada pelo roteirista Derek Kolstad e estrelada por Keanu Reeves como John Wick, um ex-assassino que é forçado a voltar ao submundo do crime que havia abandonado.',
    banner: 'https://c.wallhere.com/photos/aa/2e/John_Wick_John_Wick_Chapter_2_Keanu_Reeves_movies-1152850.jpg!d',
  }
];
