import { BASE_URL } from "./baseURL";
import { FilmListType } from "../../types/filmTypeRequest";

const genreCartoons = '%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC'

const headers = {
   "Content-Type": "application/json",
    'X-API-KEY': 'AT06YB5-WFTM0QM-MVFEWVQ-XVTVSMY'
}

class MoviesAPI {
  /** Получить список фильмов */
  static async getMovies(page:string): Promise<FilmListType> {
    const res = await fetch(`${BASE_URL}/v1.4/movie?page=${page}&limit=32`, {
      cache: 'no-cache',
      method:  'GET',
      headers
    })
    const data = await res.json();
    return data.docs
  }

  /** Получить список мультфильмов */
  static async getCartoons(page:string): Promise<FilmListType> {
    const res = await fetch(`${BASE_URL}/v1.4/movie?page=${page}&limit=32&genres.name=${genreCartoons}`, {
      cache: 'no-cache',
      method:  'GET',
      headers
    })
    const data = await res.json();
    return data.docs
  }

  /** Получить фильм по id */
  static async getMovie(id:string): Promise<any> {
    const res = await fetch(`${BASE_URL}/v1.4/movie/${id}`, {
      cache:  'no-cache',
      method:  'GET', 
      headers
    })
    const data = await res.json();
    return data;
  }
}

export default MoviesAPI;
