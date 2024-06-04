// 'use client'

// import MoviesAPI from "@/api/getMovies";
// import MoreButton from "@/Components/Header/Components/ButtonMore/More";
// import { addFilms } from "@/redux/rootSlice";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

// export default async function  MainFilmsPage() {
//   const [loading , setLoading] = useState<boolean>(false)
//   const dispatch = useDispatch();
 
//   const moreFilmsClick = async () => {
//     const page = Math.floor(Math.random() * 1000)
    
//     try {
//       setLoading(true)
//       const data = await MoviesAPI.getMovies(page.toString());
//       dispatch(addFilms(data.data));
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
//   }
  
//   return (
//     <MoreButton loading={loading} moreFilmsClick={moreFilmsClick} scalePreloader={1.2} />
//   )
  
// }