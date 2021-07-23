import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' />
        </div>
      ))}
    </>
  )
}

export default MovieList