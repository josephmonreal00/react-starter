import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Watched',
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {

    return (
      <button class='btn btn-success' onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Watched' : 'Watch'}
      </button>
    )
  }
}
export default Toggle;