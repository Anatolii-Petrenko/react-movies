import style from './Movie.module.css';
function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id} className={style.movie}>
      <div className={style.movieImgWrapper}>
        {poster === 'N/A' ? (
          <h3 className={style.noPoster}>No Poster</h3>
        ) : (
          <img
            className={style.posterImg}
            src={poster}
            alt={`${title} image`}
          />
        )}
      </div>
      <div className={style.movieContent}>
        <h3 className={style.movieTitle}>{title}</h3>
        <div className={style.movieDescription}>
          <p>{`Year: ${year}`}</p>
        </div>
      </div>
      <p className={style.movieContentType}>{type}</p>
    </div>
  );
}

export default Movie;
