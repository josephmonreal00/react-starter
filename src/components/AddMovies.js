import React from 'react';
class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieToAdd: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({movieToAdd: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.cb(this.state.movieToAdd);
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

    return (
      <div style={formStyle}  class="form-group">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add a movie title here" style={inputStyle} value={this.state.movieToAdd } onChange={this.handleChange} />
          <input class="btn btn-success" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddMovies;