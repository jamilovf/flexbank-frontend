import React, { useEffect, useRef, useState } from "react";
import CardService from "../../api/cardService";
import TransactionService from "../../api/transactionService";

export default function TransferForm(props) {
  const [transferError, settransferError] = useState(false);
  const [transferMessage, settransferMessage] = useState("");

  const title1Ref = useRef();
  const title2Ref = useRef();
  const title3Ref = useRef();
  const amountRef = useRef();
  const cardRef = useRef();

  const [cards, setcards] = useState([]);

  useEffect(() => {
    let cardService = new CardService();

    cardService
      .getAllCards()
      .then((response) => {
        response.data.map((card) => {
          return setcards((cards) => [...cards, card]);
        });
      })
      .catch((error) => {});
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    let transactionService = new TransactionService();
    let body = {};

    if (props.transferType === "Internal") {
      const recipientCardNumber = title1Ref.current.value;
      const firstName = title2Ref.current.value;
      const lastName = title3Ref.current.value;
      body = { recipientCardNumber, firstName, lastName };
    } else {
      const iban = title1Ref.current.value;
      const swiftCode = title2Ref.current.value;
      const recipientName = title3Ref.current.value;
      body = { iban, swiftCode, recipientName };
    }
    const amount = amountRef.current.value;
    const chosenCardId = cardRef.current.value;
    body = { ...body, amount, chosenCardId };

    transactionService
      .transfer(props.url, body)
      .then((response) => {
        settransferError(false);
        settransferMessage(response.data);
      })
      .catch((error) => {
        settransferError(true);
        settransferMessage(error.response.data.message);
      });
  };

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      <h2>{props.transferType} Transfer</h2>
      <div className="mb-3">
        <label htmlFor="inputTitle1" className="form-label">
          {props.title1}
        </label>
        <input
          type="text"
          ref={title1Ref}
          className="form-control"
          id="inputTitle1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputTitle2" className="form-label">
          {props.title2}
        </label>
        <input
          type="text"
          ref={title2Ref}
          className="form-control"
          id="inputTitle2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputTitle3" className="form-label">
          {props.title3}
        </label>
        <input
          type="text"
          ref={title3Ref}
          className="form-control"
          id="inputTitle3"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputAmount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          ref={amountRef}
          className="form-control"
          id="inputAmount"
        />
      </div>
      <div className="mb-3 choose">
        <select
          className="form-select"
          ref={cardRef}
          aria-label="Default select example"
        >
          <option defaultValue>Choose card</option>
          {cards.map((card, index) => {
            return (
              <option value={card.id} key={index}>
                Card : {card.cardNumber}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Balance: {card.balance}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Transfer
      </button>
      {transferError ? (
        <h6 className="transfer-error">{transferMessage}</h6>
      ) : (
        <h6 className="transfer-success">{transferMessage}</h6>
      )}
    </form>
  );
}
