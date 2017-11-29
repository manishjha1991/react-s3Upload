import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageUpload from "./components/fileUploadComponent.js";
class App extends Component {
  render() {
    return (
      <div className="App">
       <ImageUpload/>
      </div>
    );
  }
}

export default App;
