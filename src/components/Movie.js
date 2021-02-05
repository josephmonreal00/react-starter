import React from 'react';
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
      <span>{props.movie}</span>
    </div>
  )
}
export default Movie;