export interface  FilmsType {
  films: FilmType[];
}

export interface FilmType {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  enName?: string | null;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description?: string | null;
  shortDescription: string;
  slogan: string;
  status?: any;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  totalSeriesLength?: any;
  seriesLength?: any;
  ratingMpaa: string;
  ageRating: number;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  persons: Person[];
  budget: Budget;
  premiere: Premiere;
  watchability: Watchability;
  top10?: any;
  top250: number;
  isSeries: boolean;
  audience: Audience[];
  ticketsOnSale: boolean;
  lists: string[];
  networks?: any;
  createdAt: string;
  updatedAt: string;
}
interface Audience {
  count: number;
  country: string;
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
  digital?: any;
  cinema?: any;
}
interface Budget {
  currency: string;
  value: number;
}
interface Person {
  id: number;
  photo: string;
  name: string;
  enName?: string | null;
  description?: string | null;
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
  language?: string | null;
  type: string;
}
interface ExternalId {
  kpHD: string;
}