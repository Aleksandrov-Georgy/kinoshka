export interface MovieType {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan?: any;
  status: string;
  rating: Rating;
  votes: Votes;
  movieLength?: any;
  totalSeriesLength?: any;
  seriesLength: number;
  ratingMpaa?: any;
  ageRating: number;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  persons: Person[];
  premiere: Premiere;
  watchability: Watchability;
  releaseYears: ReleaseYear[];
  top10?: any;
  top250?: any;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: string[];
  networks: Networks;
  createdAt: string;
  updatedAt: string;
}
interface Networks {
  items: Genre[];
}
interface ReleaseYear {
  start: number;
  end: number;
}
interface Watchability {
  items: Item[];
}
interface Item {
  name: string;
  logo: Logo;
  url: string;
}
interface Logo {
  url: string;
}
interface Premiere {
  country?: any;
  russia?: any;
  cinema?: any;
  bluray?: any;
  dvd?: any;
}
interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description?: string;
  profession: string;
  enProfession: string;
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
  await?: any;
}
interface Name {
  name: string;
  language?: string;
  type: string;
}
interface ExternalId {
  kpHD: string;
}