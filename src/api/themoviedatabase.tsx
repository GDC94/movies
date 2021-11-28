import axios from 'axios'

export const moviesDataBase = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'es-ES'
    }
});




