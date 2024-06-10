'use client';

import MoviesAPI from "@/api/getMovies";
import { useEffect, useState } from "react";

interface IProp {
  params: {
    id: number;
  };
}

export default function Movie({ params: { id } }: IProp) {
  const [movie , setMovie] = useState([])
  const [loading , setLoading] = useState(false);

  console.log(movie)

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
      <h1>movie {id}</h1>
    </>
  );
}
