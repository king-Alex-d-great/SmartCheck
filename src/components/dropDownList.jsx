import React, { Component } from "react";

class DropDownMenu extends Component {
  state = {
    className: "dropdown-content",
  };

  showDropdown = (e) => {
    const className =
      this.state.className === "dropdown-content"
        ? "dropdown-content show"
        : "dropdown-content";
    this.setState({
      className: className,
    });
  };

  render() {
    return (
      <div class="dropdown">
        <button onclick={(e) => this.showDropdown(e)} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className={this.state.className}>
          <a href>Link 1</a>
          <a href>Link 2</a>
          <a href>Link 3</a>
        </div>
      </div>
    );
  }
}

export default DropDownMenu;