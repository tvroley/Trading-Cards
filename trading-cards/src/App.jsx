import { useState } from 'react';
import './App.css';
import TradingCards from './TradingCards';
import grandpaCollection from './GrandpaCollection.json';
import uncleCollection from './UncleCollection.json';

function App() {
  
  return (
    <>
      <h1>Your Collection</h1>
      <TradingCards cardCollection={grandpaCollection}/>
    </>
  )
}

export default App
