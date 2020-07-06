import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="task-name">{this.props.name}</div>
        <button className="del-btn">X</button>
      </div>
    );
  }
}

export default Task;
