import React from 'react';
import MovieList from './MovieList';
import Header from './Header';
import Search from './Search';
import AddMovies from './AddMovies';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      og_movies: [ {title: 'Mean Girls'}, {title: 'Hackers'},{title: 'The Grey'},{title: 'Sunshine'}, {title: 'Ex Machina'}, {title: 'Sunset'}, {title: 'MeMe'}, {title: 'Hackathton'}],
      searchedFor: '',
      movieAdded: [],
      toggleVal: '',
      watched: [],
      toWatch: []
    };
    this.getMovie = this.getMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.getToggleValue = this.getToggleValue.bind(this);
  }

  getMovie(theMovieSearch) {
    // console.log(theMovieSearch);
    let retArr = [];
    if ( theMovieSearch === '') {
      //console.log(this.state.movies);
      this.setState({
        movieAdded: this.state.og_movies
      });
    } else {
      for ( let i = 0; i < this.state.movieAdded.length; i++ ) {
        // console.log('The Substring: ', this.state.movies[i].title.substring(0, theMovieSearch.length ));
        // console.log('The MovieSearch: ', theMovieSearch);
        if ( this.state.movieAdded[i].title.toLowerCase().substring(0, theMovieSearch.length ) === theMovieSearch.toLowerCase()) {
          retArr.push({'title': this.state.movieAdded[i].title});
        }
      }
      this.setState({
        movieAdded: retArr
      });
      // console.log(retArr);
      // console.log(theMovieSearch);
      // this.state.searchedFor = retArr;
    }
  }

  addMovie(letsAddThisMovie) {
    console.log(letsAddThisMovie);
    let newMovie = {title: letsAddThisMovie};
    this.setState({
      movieAdded: this.state.movieAdded.concat(newMovie),
      og_movies: this.state.movieAdded.concat(newMovie)
    });
    // this.setState({
    //   movies: this.state.og_movies.concat(newMovie)
    // });
  }

  getToggleValue(param) {
    if ( param === 'Watched') {
      for ( let i = 0; i < this.state.og_movies.length; i++ ) {
        console.log(this.state.og_movies[i]);
      }
      this.setState({
        watched: this.state.watched.concat({title: param})
      })
    } else {
      this.setState({
        toWatch: this.state.toWatch.concat({title: param})
      })
    }
    this.setState({
      toggleVal: param
    })
    console.log('getting toggle value inside of app', param);
    console.log(this.state.watched);
    console.log(this.state.toWatch);
  }

  render(){
    return(
    <div>
      <Header />
      <AddMovies cb={this.addMovie} />
      <Search toggleVal={this.getToggleValue} cb={this.getMovie}/>
      <MovieList movieList={this.state.movieAdded} />
    </div>
  )}
}

export default App;
