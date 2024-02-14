import { useState } from 'react';
import './App.css';
import TradingCard from './TradingCard';
import PropTypes from 'prop-types';

function TradingCards({cardCollection}) {
  const [tradingCardCollection, setTradingCardCollection] = useState(cardCollection);

  return (
    <div className='div-cards'>
      {tradingCardCollection.map((card) => {
        return (
          <div key={card.certificationNumber} className='div-card'>
            <TradingCard tradingCard={card}/>
          </div>
        )
      })}
    </div>
  )
}

TradingCards.propTypes = {
    cardCollection: PropTypes.array.isRequired
}

export default TradingCards;