'use client';

import Image from 'next/image';
import {  FilmType } from '../../../types/filmType';
import S from './card.module.scss';
import {  useSelector } from 'react-redux';
import {  rootSliceType } from '@/redux/rootSlice';
import { useState } from 'react';


export default function Card() {
  const [onLoad , setOnLoad] = useState(true);
  const films: any = useSelector((state: rootSliceType) => state.films);

  console.log(films)

  window.onload && setOnLoad(false);

  console.log(onLoad)

  return (
    <>
      {films && films.films?.map((film: FilmType) => (
        film.poster.previewUrl ? (
          <div className={S.card} key={film.id}>
          <Image className={S.image}
            src={film.poster?.previewUrl ? film.poster.previewUrl : ''} 
            alt={film.name} width={300} height={420}/>
          <div className={S.info}>
            <h2 className={S.title}>{film.name}</h2>
            <p className={S.description}>{film.description}</p>
            <div className={S.button}>Информация</div>
          </div>
        </div>
        ) : null
      ))}
    </>
  );
}