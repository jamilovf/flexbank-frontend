import React from "react";
import CardService from "../../api/cardService";
import visaLogo from "../../img/visa-logo.svg";

export default function BankCard(props) {
  const blockCard = () => {
    let cardService = new CardService();
    const id = props.id;

    cardService
      .blockCard({ id })
      .then((response) => {
        if (response.data.isBlocked) {
          props.blockCard(props.cardType);
        }
      })
      .catch((error) => {});
  };

  const unblockCard = () => {
    let cardService = new CardService();
    const id = props.id;

    cardService
      .unblockCard({ id })
      .then((response) => {
        if (!response.data.isBlocked) {
          props.unblockCard(props.cardType);
        }
      })
      .catch((error) => {});
  };

  return (
    <div className={props.cardTypeClass}>
      <div className="card__front">
        <img src={visaLogo} className="card__logo" alt="..." />
        <div className="card__number number">
          {props.cardNumber.map((number, index) => {
            return (
              <div key={index} className="number-group">
                {number}
              </div>
            );
          })}
          {props.blocked ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={unblockCard}
            >
              Unblock
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger"
              onClick={blockCard}
            >
              Block
            </button>
          )}
        </div>
        <div className="card__details">
          <div className="card__holder">
            <span className="card__holder__title">Card Holder</span>
            <span className="card__holder__name">{props.customerName}</span>
          </div>
          <div className="card__expiration">
            <span className="card__expiration__title">Expires</span>
            <span className="card__expiration__date">
              {props.cardExpiryDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
