import React, { Component } from 'react';
import './App.css';
import AnimalCard from "./components/AnimalContent";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
 

class App extends Component {
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
