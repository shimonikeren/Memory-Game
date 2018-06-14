import React, { Component } from 'react';
import './App.css';
import AnimalCard from "./components/AnimalCard";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
 

class App extends Component {
  //logic will go here 

  // Map over this.state.items and render item component for each friend object
  render() {
    return (
      <div>
        <Jumbo />
        <Header />
        <AnimalCard />
      </div>
    );
  }
}

export default App;
