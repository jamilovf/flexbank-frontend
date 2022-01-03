import React from "react";
import visaLogo from "../../img/visa-logo.svg";

export default function BankCard(props) {
  return (
    <div className={props.cardType}>
      <div className="card__front">
        <img src={visaLogo} className="card__logo" alt="..." />
        <div className="card__number number">
          {props.cardNumber.map((number) => {
           return <div className="number-group">{number}</div>
          })}
          <button type="button" className="btn btn-danger">
            Block
          </button>
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
