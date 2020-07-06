import React from "react";
import Header from "./components/header";
import Task from "./components/task";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          name: "Add your first task."
        },
        {
          name: "Remove the obsolete ones like the one above."
        }
      ],
      newTask: ""
    };
  }

  getTask = e => {
    // get the task name being entered.
    // console.log(e.target.value);

    const newTask = e.target.value;

    this.setState({ newTask });
    // same as: this.setState({newTask: newTask})
  };

  addTask = () => {
    const { newTask } = this.state;

    const { tasks } = this.state;

    if (newTask.trim().length > 0) {
      // if the new task is not empty, add it
      tasks.unshift({ name: newTask });

      this.setState({
        tasks
      });
    }
  };

  render() {
    return (
      <div>
        {/* header Component, with input */}
        <Header onTypeTask={this.getTask} onAddTask={this.addTask} />

        {/* list of tasks Component => task Component */}
        <div className="task-list">
          {this.state.tasks.map((task, index) => (
            <Task name={task.name} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
