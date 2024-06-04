'use client';

import Card from '@/Components/Main/Card';
import S from '../main.module.scss';

// import MainFilmsPage from '@/Components/Main/MainFilmsPage/MainFilmsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFilms } from '@/redux/rootSlice';
import MoviesAPI from '@/api/getMovies';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(()  => {
    getData();
  },[])
  
  async function getData () {
    const page = Math.floor(Math.random() * 1000)
    
    try {
      const data = await MoviesAPI.getMovies(page.toString());
      console.log(data)
      dispatch(addFilms(data.data.docs));
    } catch (error) {
      console.log(error)
    }
  }

   return (
   <>
    <div className={S.wrapper}>
      <Card />
    </div>
   </>
  );
}
