'use client';

import Image from 'next/image';
import S from './card.module.scss';
import { useState } from 'react';
import { FilmType } from '../../../types/filmType';
import { useRouter } from 'next/navigation';

interface TProps {
  film: FilmType;
}

export default function Card({ film }: TProps) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!film.poster?.previewUrl) return null;

  return (
      <div
          className={S.card}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        {!isLoaded && <div className={S.skeleton} />}

        <Image
            className={`${S.image} ${isLoaded ? S.loaded : ''}`}
            src={film.poster.previewUrl}
            alt={film.name || 'film poster'}
            width={300}
            height={450}
            quality={85}
            onLoadingComplete={() => setIsLoaded(true)}
        />

        <div className={`${S.info} ${isHovered ? S.visible : ''}`}>
          <h2 className={S.title}>{film.name}</h2>
          {film.description && (
              <p className={S.description}>{film.description}</p>
          )}
          <button
              className={S.button}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/movie/${film.id}`);
              }}
          >
            Подробнее
          </button>
        </div>
      </div>
  );
}