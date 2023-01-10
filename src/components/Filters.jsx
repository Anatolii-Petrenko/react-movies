import React from 'react';
import style from './Filters.module.css';

function Filters(props) {
  return (
    <div className={style.filters}>
      <label>
        <input
          name="type"
          type="radio"
          data-type="all"
          onChange={props.onChange}
          checked={props.type === 'all'}
        />
        <span>All</span>
      </label>
      <label>
        <input
          name="type"
          type="radio"
          data-type="movie"
          onChange={props.onChange}
          checked={props.type === 'movie'}
        />
        <span>Movies</span>
      </label>
      <label>
        <input
          name="type"
          type="radio"
          data-type="series"
          onChange={props.onChange}
          checked={props.type === 'series'}
        />
        <span>Serials</span>
      </label>
      <label>
        <input
          name="type"
          type="radio"
          data-type="episode"
          onChange={props.onChange}
          checked={props.type === 'episode'}
        />
        <span>Episodes</span>
      </label>
    </div>
  );
}

export default Filters;
