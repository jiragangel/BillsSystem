import React, { Component } from 'react';
import './App.css'

class Header extends Component {
  render(){
    return(
      <div id="navigator">
        <h1>BILL INFORMATION SYSTEM</h1>
        <nav id="headerNav">
          <a href="/"><h3>Home</h3></a>
          <a href="/Bills"><h3>Bills</h3></a>
          <a href="/Senators"><h3>Senators</h3></a>
          <a href="/HouseMember"><h3>House Members</h3></a>
          <a href="/Reports"><h3>Reports</h3></a>
        </nav>
      </div>
    )
  }
}

export default Header;
