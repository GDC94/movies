import React, { useEffect, useState } from 'react'
import { moviesDataBase } from '../api/themoviedatabase';
import '../css/Row.css';
import { MoviesNetflix, Movies } from '../interfaces/movies';



interface Props {
    title: string,
    url: string,
    isLargeRow?: boolean
}

export default function Row({ title, url, isLargeRow }: Props) {

    const [originalesnetflix, setOriginalesNetflix] = useState<MoviesNetflix[]>([]);


    useEffect(() => {
        const getOriginals = async () => {
            const response = await moviesDataBase.get<Movies>(url);
            setOriginalesNetflix(response.data.results);
        }
        getOriginals()

    }, [url]);

    const baseUrlImage = `https://image.tmdb.org/t/p/w500`;




    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className="row__posters">
                {originalesnetflix.map(original => (
                    <img

                        key={original.id}
                        src={`${baseUrlImage}${isLargeRow ? original.poster_path : original.backdrop_path}`}
                        alt={original.name}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    />
                ))}
            </div>

        </div>
    )
}
