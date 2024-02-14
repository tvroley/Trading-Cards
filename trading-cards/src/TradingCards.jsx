import { useState } from 'react';
import './App.css';
import TradingCard from './TradingCard';

function TradingCards({cardCollection}) {
  const [tradingCardCollection, setTradingCardCollection] = useState(cardCollection);

  return (
    <div className='div-cards'>
      {tradingCardCollection.map((tradingCard) => {
        <TradingCard tradingCard={tradingCard}/>
      })}
    </div>
  )
}

export default TradingCards;