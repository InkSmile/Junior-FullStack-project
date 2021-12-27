import React, { Component } from "react";
import "./header.css";

class Header extends Component {
render() {
    return (
      <div className="topBar">
      <div className="topBarWrapper">
          <div className="topLeft">
              <a href="/" className="logo">Junior FullStack Project</a>
          </div>
          <div className="topRight">
              <a href='/user' className="topBarUsers" >Users</a>
              |
              <a href='/group' className="topBarGroups">Groups</a>
          </div>
      </div>
  </div>
    );
    }
}

export default Header;