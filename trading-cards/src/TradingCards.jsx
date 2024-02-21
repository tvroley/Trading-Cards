import { useEffect, useState } from 'react';
import './App.css';
import TradingCard from './TradingCard';
import { useLocation } from "react-router-dom";
import grandpaCollection from './GrandpaCollection.json';
import uncleCollection from './UncleCollection.json';
import PropTypes from 'prop-types';
import CardForm from './CardForm';

function TradingCards() {
  const [tradingCardCollection, setTradingCardCollection] = useState([]);
  const collectionName = useLocation().pathname.split("/")[1];

  useEffect(() => {
    if(collectionName === 'grandpa') {
      setTradingCardCollection(grandpaCollection);
    } else if (collectionName === 'uncle') {
      setTradingCardCollection(uncleCollection);
    }
  }, [collectionName]);
  
  return (
    <>
    <h2>{collectionName.toUpperCase()}</h2>
    <CardForm tradingCardCollection={tradingCardCollection} setTradingCardCollection={setTradingCardCollection}/>
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
    </>
  )
}

TradingCard.propTypes = {
  tradingCardCollection: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      brand: PropTypes.string,
      cardSet: PropTypes.string,
      cardNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      player: PropTypes.string,
      gradingCompany: PropTypes.string,
      grade: PropTypes.string,
      certificationNumber: PropTypes.string,
      frontCardImageLink: PropTypes.string,
      backCardImageLink: PropTypes.string,
      sold: PropTypes.bool
    })
  ),
  setTradingCardCollection: PropTypes.func.isRequired
};

export default TradingCards;