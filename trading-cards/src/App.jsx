import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TradingCards from './TradingCards';
import grandpaCollection from './GrandpaCollection.json';
import uncleCollection from './UncleCollection.json';
import CardCollections from './CardCollections';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/grandpaCollection" element={<TradingCards cardCollection={grandpaCollection}/>} />
        <Route path="/uncleCollection" element={<TradingCards cardCollection={uncleCollection}/>} />
      </Routes>
    </div>
  )
}

export default App
