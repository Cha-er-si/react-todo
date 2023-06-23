import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    id: null,
    content: "",
  };

  handleChange = (e) => {
    let id = Math.round(Math.random() * 1000000);
    this.setState({
      id,
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      id: null,
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Add your todo's"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
