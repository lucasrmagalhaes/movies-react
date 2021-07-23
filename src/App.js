import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?s=avengers&apikey=263d22d8";

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    setMovies(responseJson.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading='Movies' />
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
