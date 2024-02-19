import { useState } from 'react';
import './App.css';
import TradingCard from './TradingCard';
import PropTypes from 'prop-types';

function TradingCards({cardCollection}) {
  const [tradingCardCollection, setTradingCardCollection] = useState(cardCollection);

  return (
    <div className='div-cards'>
      {tradingCardCollection.map((card, index) => {
        let cardClass = 'unsold';
        if(card.sold) {
          cardClass = 'sold';
        }
        return (
          <div key={card.certificationNumber} className={`div-card ${cardClass}`}>
            <TradingCard tradingCard={card} index={index} tradingCardCollection={tradingCardCollection} setTradingCardCollection={setTradingCardCollection}/>
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