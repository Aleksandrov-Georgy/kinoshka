'use client';

import Card from '@/Components/Main/Card';
import S from '../main.module.scss';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilms } from '@/redux/rootSlice';
import MoviesAPI from '@/api/getMovies';
import MoreButton from '@/Components/ButtonMore/More';

export default function Home() {
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch();

  useEffect(()  => {
    getData();
  },[])
  
  async function getData () {
    setLoading(true)
    const page = Math.floor(Math.random() * 1000)
    
    try {
      const data = await MoviesAPI.getMovies(page.toString());
      console.log(data.data.docs.films)
      dispatch(addFilms(data.data.docs));
    } catch (error) {
      console.log(error)
    } finally  {
      setLoading(false);
    }
  }

   return (
   <>
    <div className={S.wrapper}>
      <Card />
    </div>
    <footer className={S.footer}>
      <MoreButton loading={loading} scalePreloader={1.2} moreFilmsClick={getData}/>
    </footer>
   </>
  );
}
