import React from 'react';
import ToggleButtons from './ToggleButtons';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieSearchFor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  handleChange() {
    this.setState({movieSearchFor: event.target.value });
    this.props.cb(this.state.movieSearchFor);
  }

  handleSubmit(event) {
    //console.log(document.getElementById('movieForm')[0].value.length);
    event.preventDefault();
    if ( document.getElementById('movieForm')[0].value.length === 0 ) {
      document.getElementById('movieForm')[0].placeholder = `Can't find that movie.`;
    } else {
      document.getElementById('movieForm')[0].placeholder = ``;
    }
    this.props.cb(this.state.movieSearchFor);

  }

  getValue(buttonVal) {
    //console.log(buttonVal);
    this.props.toggleVal(buttonVal);
  }

  render() {
    const formStyle = {
      display: 'flex',
      alignItems: 'center',
      'flex-direction': 'column',
      justifyContent: 'center',
      padding: '0px 0px 20px 0px'
    };

    const inputStyle = {
      width: '200px',
      height: '40px'
    };

    const buttonStyle = {
      width: '200px',
      height: '40px'
    };

    return (
      <div style={formStyle} >
        <ToggleButtons cb={this.getValue}/>
        <form id="movieForm" onSubmit={this.handleSubmit}>
          <input placeholder="Search..." style={inputStyle} type="text" value={this.state.movieSearchFor} onChange={this.handleChange} />
          <input class="btn btn-secondary" type="submit" value="Go!" />
        </form>
      </div>
    )
  }
}
export default Search;