import React from 'react';
import Toggle from './Toggle';
function Movie(props) {
  const divStyle = {
    color: 'black',
    padding: '30px',
    fontSize: '50px',
    backgroundColor: 'white',
    border: '1px solid black',
    width: '400px'
  }

  return (
    <div style={divStyle}>
      <div class='movie'>
      {props.movie}
      </div>
      <div class='toggle'>
        <Toggle />
      </div>

    </div>
  )
}
export default Movie;