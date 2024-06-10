'use client';

import MoviesAPI from "@/api/getMovies";
import { useEffect, useState } from "react";
import { MovieType } from "../../../../../types/movie";
import S from './movie.module.scss';
import Image from "next/image";
import stub from '../../../../../public/stub.jpg'
import Link from "next/link";
import Preloader from "@/Components/Preloader/preloader";

interface IProp {
  params: {
    id: number;
  };
}

export default function Movie({ params: { id } }: IProp) {
  const [movie , setMovie] = useState<MovieType>()
  const [isLoadedImage, setIsLoadedImage] = useState(true);
  const [loading , setLoading] = useState(false);

  useEffect(()  => {
    getData();
  },[])
  
  async function getData () {
    setLoading(true)
   
    try {
      const data = await MoviesAPI.getMovie(id.toString());
      setMovie(data);
    } catch (error) {
      console.log(error)
    } finally  {
      setLoading(false);
    }
  }

  return (
    <>
    {movie ? 
      <div className={S.wrapper}>
         {isLoadedImage &&  
            (<div className={S.loading_image}>
              <Preloader scale={1.2} />
            </div>) 
          }
         <div className={!isLoadedImage ? `${S.image_box}` : ''}>
            <Image
                className={S.image}
                src={movie!.poster?.url ? movie!.poster.url : stub}
                alt={movie!.name ? movie!.name : 'poster'}
                width={400}
                height={520}
                onLoad={() => setIsLoadedImage(false)}
              />
             </div>
          
        <div>
          <div className={S.info}>
            <h1 className={S.title}>{movie!.name}</h1>
            <p className={S.year}>Год выпуска: {movie!.year}</p>
            <p className={S.description}>{movie!.description && movie!.description}</p>
          </div>
          <div className={S.show}>
          {
            movie!.watchability?.items.length > 0 && (
              <>
                <h3 className={S.show}>Где посмотреть?</h3>
                <div className={S.buttons_show}>
                  {movie!.watchability.items.map(el => (
                    <Link key={el.name} href={el.url} target="_blank">
                        <button className={S.button} >{el.name}</button>
                    </Link>
                ))}
              </div>
              </>
            )
          }
          </div>
        </div>
      </div>
    : <Preloader scale={1.2} />}
    </>
  );
}
