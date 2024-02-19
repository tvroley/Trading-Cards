import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function TradingCard({tradingCard, index, tradingCardCollection, setTradingCardCollection}) {
  const [card, setCard] = useState(tradingCard);

  const flipImage = (event) => {
    const el = event.target;
    if(el.src === card.frontCardImageLink) {
        el.src = card.backCardImageLink;
    } else {
        el.src = card.frontCardImageLink;
    }
  }

  const toggleSold = (event) => {
    const cardClone = structuredClone(card);
    cardClone.sold = event.target.checked;
    const arr1 = tradingCardCollection.slice(0, index);
    const arr2 = tradingCardCollection.slice(index + 1);
    setTradingCardCollection([...arr1, cardClone, ...arr2]);
    setCard(cardClone);
  }
  
  return (
      <>
        <img src={card.frontCardImageLink} alt={`picture of a ${card.player} card`} onClick={(event) => flipImage(event)}/>
        <p>{card.cardSet} #{card.cardNumber} {card.player}</p>
        <p>{card.gradingCompany} {card.grade} #{card.certificationNumber}</p>
        <label htmlFor=''>Sold</label>
        <input type='checkbox' checked={card.sold} onChange={(event) => toggleSold(event)} id={`${card.certificationNumber}soldCheckbox`} />
      </>
  )
}

TradingCard.propTypes = {
    tradingCard: PropTypes.object.isRequired
}

export default TradingCard;