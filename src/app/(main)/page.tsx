'use client';

import S from '../main.module.scss';
import { useEffect, useState } from 'react';
import MoviesAPI from '@/api/getMovies';
import MoreButton from '@/Components/ButtonMore/More';
import Card from '@/Components/Card/Card';
import { FilmType } from '../../../types/filmType';
import { useDispatch, useSelector } from 'react-redux';
import { addFilms, rootSliceType } from '@/redux/rootSlice';

export default function Home() {
  const dispatch  =  useDispatch();
  const [loading , setLoading] = useState(false);
  const { films } = useSelector((state: rootSliceType) => state.films) as any;

  console.log('films is main', films);

  useEffect(()  => {
    getData();
  },[])
  
  async function getData () {
    setLoading(true)
    const page = Math.floor(Math.random() * 100)
    
    try {
      const data = await MoviesAPI.getMovies(page.toString());
      dispatch(addFilms(data))
    } catch (error) {
      console.log(error)
    } finally  {
      setLoading(false);
    }
  }

   return (
   <>
    <div className={S.wrapper}>
      {films && films.map((film: FilmType) => <Card film={film} key={film.id} />)}
    </div>
    <footer className={S.footer}>
      <MoreButton loading={loading} scalePreloader={1.2} moreFilmsClick={getData}/>
    </footer>
   </>
  );
}
