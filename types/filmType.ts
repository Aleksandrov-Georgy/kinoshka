import { Film } from "./filmTypeRequest";

export interface FilmListType {
  films: FilmType[];
}

export interface FilmType {
  id: number;
  name?: any;
  alternativeName: string;
  enName?: any;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description?: any;
  shortDescription?: any;
  status?: any;
  rating: Rating;
  votes: Rating;
  movieLength: number;
  totalSeriesLength?: any;
  seriesLength?: any;
  ratingMpaa?: any;
  ageRating?: any;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  top10?: any;
  top250?: any;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
interface Genre {
  name: string;
}
interface Poster {
  url?: any;
  previewUrl?: any;
}
interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}
interface Name {
  name: string;
  language?: any;
  type: string;
}