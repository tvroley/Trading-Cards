import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function TradingCard({tradingCard}) {
  const [card, setCard] = useState(tradingCard);

  const flipImage = (event) => {
    const el = event.target;
    if(el.src === card.frontCardImageLink) {
        el.src = card.backCardImageLink;
    } else {
        el.src = card.frontCardImageLink;
    }
  }
  
  return (
      <>
        <img src={card.frontCardImageLink} alt={`picture of a ${card.player} card`} onClick={(event) => flipImage(event)}/>
        <p>{card.certificationNumber}</p>
      </>
  )
}

TradingCard.propTypes = {
    tradingCard: PropTypes.object.isRequired
}

export default TradingCard;