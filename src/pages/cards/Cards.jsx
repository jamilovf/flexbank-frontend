import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardService from "../../api/cardService";
import { splitString, formattedBalance } from "../../common/helper";
import BankCard from "./BankCard";

export default function Cards() {
  const [standardCard, setstandardCard] = useState(false);
  const [standardId, setstandardId] = useState(0);
  const [standardCardNumber, setstandardCardNumber] = useState([]);
  const [standardBalance, setstandardBalance] = useState("");
  const [standardExpiryDate, setstandardExpiryDate] = useState("");
  const [premiumCard, setpremiumCard] = useState(false);
  const [premiumId, setpremiumId] = useState(0);
  const [premiumCardNumber, setpremiumCardNumber] = useState([]);
  const [premiumBalance, setpremiumBalance] = useState("");
  const [premiumExpiryDate, setpremiumExpiryDate] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [standardBlocked, setstandardBlocked] = useState(false);
  const [premiumBlocked, setpremiumBlocked] = useState(false);

  useEffect(() => {
    let cardService = new CardService();

    cardService.getAllCards().then((response) => {
      response.data.map((card) => {
        if (card.cardType === "STANDARD") {
          setstandardCard(true);
          setstandardId(card.id);
          setstandardCardNumber(splitString(card.cardNumber, 4));
          setstandardBalance(formattedBalance(card.balance));
          setstandardExpiryDate(card.expiryDate);
          setcustomerName(card.customerName);
          setstandardBlocked(card.isBlocked);
        } else if (card.cardType === "PREMIUM") {
          setpremiumCard(true);
          setpremiumId(card.id);
          setpremiumCardNumber(splitString(card.cardNumber, 4));
          setpremiumBalance(formattedBalance(card.balance));
          setpremiumExpiryDate(card.expiryDate);
          setcustomerName(card.customerName);
          setpremiumBlocked(card.isBlocked);
        }
      });
    });
  }, []);

  const blockCard = (cardType) => {
    if (cardType === "STANDARD") {
      setstandardBlocked(true);
    } else {
      setpremiumBlocked(true);
    }
  };

  const unblockCard = (cardType) => {
    if (cardType === "STANDARD") {
      setstandardBlocked(false);
    } else {
      setpremiumBlocked(false);
    }
  };
  return (
    <div className="main-container">
      <div className="flexcard">
        <div className="card-body">
          <i className="fas fa-info-circle"></i>
          <h4 className="card-text">
            In case of fraud detection or stolen amount:
          </h4>
          <ol>
            <h5>
              <li className="block">Block your card.</li>
            </h5>
            <h5>
              <li>Contact us from Contact Us section</li>
            </h5>
          </ol>
        </div>
      </div>
      <div className="scene">
        {standardCard ? (
          <BankCard
            cardTypeClass="my__card"
            cardType="STANDARD"
            id={standardId}
            cardNumber={standardCardNumber}
            cardExpiryDate={standardExpiryDate}
            customerName={customerName}
            blocked={standardBlocked}
            blockCard={blockCard}
            unblockCard={unblockCard}
          />
        ) : null}
        {standardCard ? (
          <button type="button" className="card btn btn-outline-success">
            Balance: {standardBalance} USD
          </button>
        ) : null}
        {premiumCard ? (
          <BankCard
            cardTypeClass="my__card premium"
            cardType="PREMIUM"
            id={premiumId}
            cardNumber={premiumCardNumber}
            cardExpiryDate={premiumExpiryDate}
            customerName={customerName}
            blocked={premiumBlocked}
            blockCard={blockCard}
            unblockCard={unblockCard}
          />
        ) : null}
        {premiumCard ? (
          <button type="button" className="card btn btn-outline-success">
            Balance: {premiumBalance} USD
          </button>
        ) : null}
      </div>
    </div>
  );
}
