import React, { useEffect, useState } from 'react';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('movies-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, [])

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    
    const favouriteExists = favourites.filter(
      (favourite) => favourite.imdbID === movie.imdbID
    )

    if (favouriteExists.length === 0) {
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem('movies-favourites', JSON.stringify(items))
  }

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />
      </div>
      <div className='row'>
        <MovieList 
          movies={movies} 
          favouriteComponent={AddFavourite}
          handleFavouriteClick={addFavouriteMovie}
        />
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />
      </div>
      <div className='row'>
        <MovieList 
          movies={favourites} 
          favouriteComponent={RemoveFavourite}
          handleFavouriteClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
