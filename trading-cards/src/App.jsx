import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import TradingCards from './TradingCards';
import Nav from './Nav';

function App() {
  
  return (
    <div>
      <h1>Your Collection</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="grandpa" element={<TradingCards/>} />
        <Route path="uncle" element={<TradingCards/>} />
      </Routes>
    </div>
  )
}

export default App
