import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-4'>
          <img src={movie.Poster} alt='Movie' />
          <div className='overlay d-flex align-items-center justify-content'></div>
        </div>
      ))}
    </>
  )
}

export default MovieList