import React from 'react';
class ToggleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    [event.target.name] = event.target.value;
    this.props.cb(event.target.innerText);
  }
  render() {
    const toggleButtons = {
      display: 'inline'
    }
    return (
      <div style={toggleButtons}>
        <button  onClick={this.handleClick} class='btn btn-info'>Watched</button>
        <button  onClick={this.handleClick} class='btn btn-info'>To Watch</button>
      </div>
    )
  }
}
export default ToggleButtons;