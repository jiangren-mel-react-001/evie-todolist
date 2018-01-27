import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import { TodoContainer } from './todolist/todo-container';

class App extends Component {
  render() {
    return (
      <TodoContainer />
    );
  }
}

export default App;