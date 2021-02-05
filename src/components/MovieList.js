import React from 'react';
import TheMovie from './Movie';
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movieListStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    return(
      <div style={movieListStyle}>
        { this.props.movieList.map((ele, i) => (
          <TheMovie movie={ele.title} key={i} />
        ))}
      </div>
    )
  }
}
export default MovieList;