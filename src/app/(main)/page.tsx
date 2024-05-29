import Card from '@/Components/Main/Card';
import S from '../main.module.scss';
// import { film } from './data'
import MoviesAPI from '@/api/getMovies';
import { useState } from 'react';
import { FilmType } from '../../../types/filmType';



export default async function Home() {
const randomPage = Math.floor(Math.random() * 100)

const {data} = await MoviesAPI.getMovies(randomPage.toString())
  

  return (
    <div className={S.wrapper}>
      {data.docs ? data.docs.map((el: FilmType) => <Card films={el}/>) : 'загрузка'}
    </div>
  );
}
