import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './api/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
const { fetchNetflixOriginals, 
        fetchTrending, 
        fetchTopRated, 
        fetchActionMovies, 
        fetchMovies} = requests;



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner url={fetchNetflixOriginals}/>
      <Row isLargeRow={true} title='Originales de Netflix' url={fetchNetflixOriginals}/>
      <Row title='Tendencia' url={fetchTrending} />
      <Row title='Mejor puntuados' url={fetchTopRated} />
      <Row title='Peliculas de accion' url={fetchActionMovies} />
      <Row title='Documentales' url={fetchMovies} />
      
    </div>
  );
}

export default App;
