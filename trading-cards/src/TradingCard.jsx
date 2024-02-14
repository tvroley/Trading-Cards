import { useState } from 'react';
import './App.css';

function TradingCard({tradingCard}) {
  const [card, setCard] = useState(tradingCard);
  return (
    <div key={card.certificationNumber} className='div-card'>
      <img src={card.frontCardImageLink} alt={`picture of a ${card.player} card`}/>
    </div>
  )
}

export default TradingCard;
