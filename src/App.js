import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

export class App extends Component {
  state = {
    todos: [],
  };

  deleteTodo = (id) => {
    console.log(id);
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    // todo.id = Math.round(Math.random() * 1000000);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
    console.log(todos);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text yellow lighten-3">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
