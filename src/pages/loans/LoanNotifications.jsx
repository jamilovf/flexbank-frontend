import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardService from "../../api/cardService";
import LoanNotificationService from "../../api/loanNotificationService";
import TransactionService from "../../api/transactionService";
import { capitalizeFirstLetter } from "../../common/helper";
import "./LoanNotifications.css";

export default function LoanNotifications() {
  const [loanNotifications, setloanNotifications] = useState([]);
  const [cards, setcards] = useState([]);
  const [paymentError, setpaymentError] = useState(false);
  const [paymentMessage, setpaymentMessage] = useState("");

  const cardRef = useRef();
  const loanRef = useRef();

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

  const submitHandler = (event) => {
    event.preventDefault();

    let transactionService = new TransactionService();

    const loanId = loanRef.current.id;
    const cardId = cardRef.current.value;
    
    if (cardId === "Choose card") {
      setpaymentError(true);
      setpaymentMessage("Please, choose a card!");
    } else {
      const body = { loanId, cardId };

      transactionService
        .payLoan(body)
        .then((response) => {
          setpaymentError(false);
          setpaymentMessage(response.data);
        })
        .catch((error) => {
          setpaymentError(true);
          setpaymentMessage(error.response.data.message);
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          {loanNotifications.map((loanNotification) => {
            return (
              <div
                ref={loanRef}
                className="card mt-4"
                key={loanNotification.id}
                id={loanNotification.id}
              >
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
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="btn loann btn-primary"
                  >
                    Pay
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {paymentError ? (
          <h6 className="payment-error">{paymentMessage}</h6>
        ) : (
          <h6 className="payment-success">{paymentMessage}</h6>
        )}
      </div>
    </div>
  );
}
