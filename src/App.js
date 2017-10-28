import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './users-list/users-list.component.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    );
  }
}

export default App;
