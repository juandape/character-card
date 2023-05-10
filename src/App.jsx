import { useState } from 'react'
import './App.css'

import CharacterCard from "./components/Charactercard";
import CharList from './components/CharList';



function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        <CharList />
        
      </div>
    </div>
  );
}

export default App;
