import React, { Component } from 'react';
import GitHubSearch from '../GitHubSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>React GitHub User Select Demo</h4>
        <GitHubSearch />
        <small>Use the input above to search for usernames on GitHub.</small>
      </div>
    );
  }
}

export default App;
