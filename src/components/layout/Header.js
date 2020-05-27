import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="Header" style={headerStyle}>
        <h1>Gym Occupancy App</h1>
      </div>
    );
  }

}

const headerStyle = {
  position: 'fixed',
  backgroundColor: '#333'
}

export default Header;
