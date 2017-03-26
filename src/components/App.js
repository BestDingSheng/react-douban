import React, { Component } from 'react';
import Header from './Header'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <MovieList/>
      </div>
    );
  }
}

export default App;