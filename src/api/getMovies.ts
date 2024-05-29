import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "./baseURL";
import { useQuery } from "@tanstack/react-query";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    'X-API-KEY': 'AT06YB5-WFTM0QM-MVFEWVQ-XVTVSMY'
  }
});

class MoviesAPI {
  /** Получить список фильмов */
  static async getMovies(page:string): Promise<AxiosResponse<any>> {
    return api.get(`v1.4/movie?page=${page}&limit=32`);
  }

}

export default MoviesAPI;

// /https://api.kinopoisk.dev/v1.4/movie?page=1&limit=32&type=&rating.kp=7-10