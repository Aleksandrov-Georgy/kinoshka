'use client';

import Image from 'next/image';
import S from './card.module.scss';
import { useState } from 'react';
import Preloader from '../Preloader/preloader';
import stub from '/public/stub.jpg'
import { FilmType } from '../../../types/filmType';
import { useRouter } from 'next/navigation'

interface TProps {
  film: FilmType
}
 
export default function Card({ film }: TProps) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      <div className={S.card}>
         {isLoaded &&  
            <div className={S.loader}>
              <Preloader scale={1.2} />
            </div>
          }
          <Image
            className={S.image}
            src={film.poster?.previewUrl ? film.poster.previewUrl : stub}
            alt={film.name ? film.name : 'poster'}
            width={300}
            height={420}
            onLoad={() => setIsLoaded(false)}
          />
        <div className={S.info}>
          <h2 className={S.title}>{film.name}</h2>
          <p className={S.description}>{film.description}</p>
          <button className={S.button} onClick={() => router.push(`/movie/${film.id}`)}>Информация</button>
        </div>
      </div>
    </>
  );
}
