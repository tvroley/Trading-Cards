import { useState } from 'react';
import './App.css';
import TradingCards from './TradingCards';
import grandpaCollection from './GrandpaCollection.json';
import uncleCollection from './UncleCollection.json';

function App() {
  
  return (
    <>
      <h2>Grandpa's Collection</h2>
      <TradingCards cardCollection={grandpaCollection}/>
      <h2>Uncle's Collection</h2>
      <TradingCards cardCollection={uncleCollection}/>
    </>
  )
}

export default App
