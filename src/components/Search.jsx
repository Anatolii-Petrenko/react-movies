import React from 'react';
import Button from './Button';
import Filters from './Filters';
import style from './Search.module.css';

class Search extends React.Component {
  state = {
    inputValue: '',
    type: 'all',
  };

  handleKey = e => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.inputValue, this.state.type);
    }
  };

  handleFilters = e => {
    console.log(e.target.dataset.type);

    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchMovies(this.state.inputValue, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className={style.search}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Search"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <Button
            onClick={() =>
              this.props.searchMovies(this.state.inputValue, this.state.type)
            }
          >
            Search
          </Button>
        </div>
        <Filters onChange={this.handleFilters} type={this.state.type} />
      </>
    );
  }
}

export default Search;
