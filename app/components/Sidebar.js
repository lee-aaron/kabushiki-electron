import React, { Component } from "react";
import { FaBars } from "react-icons/fa";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      sidebar: !this.state.sidebar
    });
    if (this.state.sidebar) {
      document.getElementById("sidebar_menu").style.minWidth = "50px";
      document.getElementById("sidebar_list").style.display = "none";
      document.getElementById("sidebar_list").style.visibility = "hidden";
    } else {
      document.getElementById("sidebar_menu").style.minWidth = "300px";
      document.getElementById("sidebar_list").style.removeProperty("display");
      document.getElementById("sidebar_list").style.visibility = "visible";
    }
  }

  render() {
    return (
      <div className="Sidebar">
        <div id="sidebar_menu" className="sidebar_items">
          <button onClick={this.toggleSidebar}>
            <FaBars />
          </button>
          <ul id="sidebar_list">
            <li>Hi</li>
            <li>Testing</li>
          </ul>
        </div>
      </div>
    );
  }
}