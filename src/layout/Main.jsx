import React from 'react';
import Movies from '../components/Movies';
import Preloader from './Preloader';
import Search from '../components/Search';
import styles from './Main.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=star%20wars&r=json`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    console.log(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }&r=json`
    );
    fetch(
      `https://www.omdbapi.com/?apikey=c49abfca&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }&r=json`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className={styles.main}>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
