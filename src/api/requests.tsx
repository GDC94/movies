const API = '91f4b80bafa6af1fdac3d669086aea6a';


const requests = {
   fetchTrending: `/trending/all/week?api_key=${API}`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API}`,
   fetchTopRated: `/movie/top_rated?api_key=${API}`,
   fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
   fetchMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
}


export default requests;

