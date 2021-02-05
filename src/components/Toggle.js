import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Watched',
      button: 'hideButton'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: '',
      button: 'showButton'
    })
  }
  render() {
    const hideButton = {

    };

    const showButton = {

    };
    return (
      <button style={this.state.button} class='btn btn-success'>{this.state.text}</button>
    )
  }
}
export default Toggle;