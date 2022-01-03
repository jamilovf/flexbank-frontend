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
        } else if (card.cardType === "PREMIUM") {
          setpremiumCard(true);
          setpremiumId(card.id);
          setpremiumCardNumber(splitString(card.cardNumber, 4));
          setpremiumBalance(formattedBalance(card.balance));
          setpremiumExpiryDate(card.expiryDate);
          setcustomerName(card.customerName);
        }
      });
    });
  }, []);

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
            cardType="my__card"
            key={standardId}
            cardNumber={standardCardNumber}
            cardExpiryDate={standardExpiryDate}
            customerName={customerName}
          />
        ) : null}
        {standardCard ? (
          <button type="button" className="card btn btn-outline-success">
            Balance: {standardBalance} USD
          </button>
        ) : null}
        {premiumCard ? (
          <BankCard
            cardType="my__card premium"
            key={premiumId}
            cardNumber={premiumCardNumber}
            cardExpiryDate={premiumExpiryDate}
            customerName={customerName}
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
