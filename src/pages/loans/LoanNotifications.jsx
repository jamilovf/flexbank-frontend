import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardService from "../../api/cardService";
import LoanNotificationService from "../../api/loanNotificationService";
import { capitalizeFirstLetter } from "../../common/helper";
import "./LoanNotifications.css";

export default function LoanNotifications() {
  const [loanNotifications, setloanNotifications] = useState([]);
  const [cards, setcards] = useState([]);

  const cardRef = useRef();

  useEffect(() => {
    let loanNotificationService = new LoanNotificationService();
    let cardService = new CardService();

    cardService
      .getAllCards()
      .then((response) => {
        response.data.map((card) => {
          return setcards((cards) => [...cards, card]);
        });
      })
      .catch((error) => {});

    loanNotificationService
      .getAllLoanNotifications()
      .then((response) => {
        setloanNotifications(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          {loanNotifications.map((loanNotification, key) => {
            return (
              <div className="card mt-4" key={key}>
                <h5 className="card-header">
                  {capitalizeFirstLetter(
                    String(loanNotification.type).toLowerCase()
                  )}{" "}
                  Loan
                </h5>
                <div className="card-body">
                  <h6 className="card-title">
                    Due to: {loanNotification.dueTo}
                  </h6>
                  <h6 className="card-text rate">
                    Interest rate: {loanNotification.interestRate}%
                  </h6>
                  <h6 className="card-text amount">
                    Amount: ${loanNotification.amount}
                  </h6>
                  <select
                    className="form-select mt-4"
                    ref={cardRef}
                    aria-label="Default select example"
                  >
                    <option defaultValue>Choose card</option>
                    {cards.map((card, index) => {
                      return (
                        <option value={card.id} key={index}>
                          Card : {card.cardNumber}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balance:{" "}
                          {card.balance}
                        </option>
                      );
                    })}
                  </select>
                  <button type="submit" className="btn loann btn-primary">
                    Pay
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
