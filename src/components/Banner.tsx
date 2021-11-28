import React, { useEffect, useState } from 'react'
import { moviesDataBase } from '../api/themoviedatabase';
import { Movies, MoviesNetflix } from '../interfaces/movies';
import '../css/Banner.css';

interface Props {
    url: string
}




export default function BannerContainer({ url }: Props) {
    const [moviebanner, setMovieBanner] = useState<MoviesNetflix[]>([]);

    useEffect(() => {
        const getMoviesBanner = async () => {
            const response = await moviesDataBase.get<Movies>(url);
            setMovieBanner(response.data.results);
        }
        getMoviesBanner();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const mapeo = moviebanner[Math.floor(Math.random() * moviebanner.length - 1)];
    
    const truncate = (str:string, n:number)=> {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;

    }

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${mapeo?.backdrop_path}')`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner__contents">
                <h1 className='banner__title'>{mapeo?.original_name || mapeo?.name}</h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                
                <span className='banner__description'>
                    {truncate(mapeo?.overview, 150)}
                </span> 

                
            </div>
            <div className="banner--fadebottom"/>
        </header>
    )
}
