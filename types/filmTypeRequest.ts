export interface FilmListType {
  docs: Film[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface Film {
  id: number;
  name: string;
  alternativeName?: string;
  enName?: any;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description?: string;
  shortDescription?: string;
  status?: string;
  rating: Rating;
  votes: Votes;
  movieLength?: number;
  totalSeriesLength?: number;
  seriesLength?: number;
  ratingMpaa?: string;
  ageRating: number;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  top10?: any;
  top250?: any;
  isSeries: boolean;
  ticketsOnSale: boolean;
  releaseYears?: ReleaseYear[];
}
interface ReleaseYear {
  start: number;
  end?: number;
}
interface Genre {
  name: string;
}
interface Poster {
  url: string;
  previewUrl: string;
}
interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}
interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await?: number;
}
interface Name {
  name: string;
  language?: string | string;
  type: string;
}