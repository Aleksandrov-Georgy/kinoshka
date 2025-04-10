'use client';

import S from '../main.module.scss';
import { useEffect, useState } from 'react';
import MoviesAPI from '@/api/getMovies';
import MoreButton from '@/Components/ButtonMore/More';
import Card from '@/Components/Card/Card';
import { FilmType } from '../../../types/filmType';
import { useDispatch, useSelector } from 'react-redux';
import { addFilms, rootSliceType } from '@/redux/rootSlice';
import CardSkeleton from "@/Components/skeleton/card/skeleton";

export default function Home() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const {films} = useSelector((state: rootSliceType) => state.films) as any;

    useEffect(() => {
        getData(); 
    }, []);

    async function getData() {
        setLoading(true);
        setError(null);
        const page = Math.floor(Math.random() * 100);

        try {
            const data = await MoviesAPI.getMovies(page.toString());
            dispatch(addFilms(data));
        } catch (err) {
            console.error(err);
            setError('Failed to load films. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className={S.main}>
            <div className={S.wrapper}>
                {loading && films.length === 0 ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <CardSkeleton key={`skeleton-${index}`} />
                    ))
                ) : error ? (
                    <div className={S.errorContainer}>
                        <p className={S.errorText}>{error}</p>
                        <button onClick={getData} className={S.retryButton}>
                            Retry
                        </button>
                    </div>
                ) : (
                    <>
                        {films.map((film: FilmType) => (
                            <Card film={film} key={film.id} />
                        ))}
                    </>
                )}
            </div>
        </main>
    );
}