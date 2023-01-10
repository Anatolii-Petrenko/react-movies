import Movie from './Movie';
import style from './Movies.module.css';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <>
      {movies.length ? (
        <div className={style.movies}>
          {movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <div className={style.moviesNotFoundContainer}>
          <h4 className={style.moviesNotFoundText}>Nothing found</h4>
          <p
            className={style.moviesNotFoundAdditionalText}
          >{`(please enter the title of the movie in the 'Search' field)`}</p>
        </div>
      )}
    </>
  );
}

export default Movies;
