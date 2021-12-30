import React from "react";
import "./Cards.css";
import visaLogo from "../../img/visa-logo.svg";

export default function OrderCard() {
  return (
    <div className="main-container">
      <div className="scene">
        <div className="my__card">
          <div className="card__front">
            <img src={visaLogo} className="card__logo" alt="..." />
            <div className="card__number number">
              <div className="number-group number-group--0">0000</div>
              <div className="number-group number-group--1">0000</div>
              <div className="number-group number-group--2">0000</div>
              <div className="number-group number-group--3">0000</div>
            </div>
            <div className="card__details">
              <div className="card__holder">
                <span className="card__holder__title">Card Holder</span>
                <span className="card__holder__name">John Doe</span>
              </div>
              <div className="card__expiration">
                <span className="card__expiration__title">Expires</span>
                <span className="card__expiration__date">00/00</span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="card btn btn-outline-success">
          Order Standard
        </button>
        <div className="my__card premium">
          <div className="card__front">
            <img src={visaLogo} className="card__logo" alt="..." />
            <div className="card__number number">
              <div className="number-group number-group--0">0000</div>
              <div className="number-group number-group--1">0000</div>
              <div className="number-group number-group--2">0000</div>
              <div className="number-group number-group--3">0000</div>
            </div>
            <div className="card__details">
              <div className="card__holder">
                <span className="card__holder__title">Card Holder</span>
                <span className="card__holder__name">John Doe</span>
              </div>
              <div className="card__expiration">
                <span className="card__expiration__title">Expires</span>
                <span className="card__expiration__date">00/00</span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="card btn btn-outline-success premium">
          Order Premium
        </button>
      </div>
    </div>
  );
}
