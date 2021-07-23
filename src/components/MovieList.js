const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-2 mb-4'>
          <img src={movie.Poster} alt='Movie' />
          <div className='overlay d-flex align-items-center justify-content'>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList