import React from 'react';
function Header(props) {
  const headerStyle = {
    color: 'black',
    padding: '20px',
    fontSize: '50px',
    margin: '0px 0px 30px 0px',
    backgroundColor: 'grey',
    textAlign: 'left'
  }
  return (
    <h1 style={headerStyle}>MovieList</h1>
  )
}
export default Header;