import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function TradingCard({tradingCard}) {
  const [card, setCard] = useState(tradingCard);
  
  return (
      <>
        <img src={card.frontCardImageLink} alt={`picture of a ${card.player} card`}/>
        <p>{card.certificationNumber}</p>
      </>
  )
}

TradingCard.propTypes = {
    tradingCard: PropTypes.object.isRequired
}

export default TradingCard;