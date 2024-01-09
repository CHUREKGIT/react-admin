import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const apiCall = () => {
      axios.get('http://localhost:3000/data').then((data) => {
        // this console.log will be in our frontend console
        console.log(data.data);
      });
    };
    return (
      <div className="App">
        <h1> Hello, World!!!!! </h1>
        <button onClick={apiCall}>Make API Call</button>
      </div>
    );
  }
}

export default App;
