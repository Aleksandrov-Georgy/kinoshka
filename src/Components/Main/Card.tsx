'use client';

import Image from 'next/image';
import {  FilmType } from '../../../types/filmType';
import S from './card.module.scss';
import {  useSelector } from 'react-redux';
import {  rootSliceType } from '@/redux/rootSlice';
import Preloader from '../Preloader/preloader';
import { useState } from 'react';

export default function Card() {
  const [isLoaded , setIsLoaded] = useState(true)
  const films: any = useSelector((state: rootSliceType) => state.films);
  
  return (
    <>
      {films && films.films.map((film: FilmType) => (
          film.poster.previewUrl ?
          <div className={S.card} key={film.id}>
            {isLoaded && 
            <div className={S.loader}>
              <Preloader scale={1.2}/>
            </div>
             }
          <Image className={S.image}
            src={film.poster.previewUrl} 
            alt={film.name} 
            width={300} height={420}
            loading="lazy"
            onLoadingComplete={() => setIsLoaded(false)}
            />
          <div className={S.info}>
            <h2 className={S.title}>{film.name}</h2>
            <p className={S.description}>{film.description}</p>
            <div className={S.button}>Информация</div>
          </div>
        </div>
       : null
      ))}
    </>
  );
}