import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <input onChange={this.props.onTypeTask} placeholder="add a task" />
        <button className="btn-add" onClick={this.props.onAddTask}>
          +
        </button>
      </div>
    );
  }
}

export default Header;
