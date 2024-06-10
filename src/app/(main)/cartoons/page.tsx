'use client'

import { useEffect, useState } from 'react';
import S from '../../main.module.scss'
import Card from '@/Components/Card/Card';
import MoreButton from '@/Components/ButtonMore/More';
import MoviesAPI from '@/api/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { addCartoons, rootSliceType } from '@/redux/rootSlice';
import { FilmType } from '../../../../types/filmType';

export default function Cartoons() {
  const dispatch  =  useDispatch();
  const [loading , setLoading] = useState(false);
  const  { cartoons } = useSelector((state: rootSliceType) => state.films) as any;
  const  state = useSelector((state: rootSliceType) => state) as any;


  console.log('cartoons is cartoons', cartoons);
  console.log('state cartoons', state);


    
  useEffect(()  => {
    getData();
  },[])
  
  async function getData () {
    setLoading(true)
    const page = Math.floor(Math.random() * 100)
    
    try {
      const data = await MoviesAPI.getCartoons(page.toString());
      dispatch(addCartoons(data))
    } catch (error) {
      console.log(error)
    } finally  {
      setLoading(false);
    }
  }

   return (
    <>
    <div className={S.wrapper}>
      {cartoons && cartoons.map((film: FilmType) => <Card film={film} key={film.id}/>)}
    </div>
    <footer className={S.footer}>
      <MoreButton loading={loading} scalePreloader={1.2} moreFilmsClick={getData}/>
    </footer>
   </>
  );
}