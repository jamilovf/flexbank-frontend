import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";
import OrderCardService from "../../api/orderCardService";
import visaLogo from "../../img/visa-logo.svg";

export default function OrderCard() {
  const [orderError, setorderError] = useState(false);
  const [orderMessage, setorderMessage] = useState("");
  const standardOrderRef = useRef();
  const premiumOrderRef = useRef();

  useEffect(() => {}, [orderError, orderMessage]);

  const orderStandardHandler = () => {
    let orderCardService = new OrderCardService();
    const type = standardOrderRef.current.value;

    orderCardService
      .orderCard({ type })
      .then((response) => {
        setorderError(false);
        setorderMessage(response.data);
      })
      .catch((error) => {
        setorderError(true);
        setorderMessage(error.response.data.message);
      });
  };

  const orderPremiumHandler = () => {
    let orderCardService = new OrderCardService();
    const type = premiumOrderRef.current.value;

    orderCardService
      .orderCard({ type })
      .then((response) => {
        setorderError(false);
        setorderMessage(response.data);
      })
      .catch((error) => {
        setorderError(true);
        setorderMessage(error.response.data.message);
      });
  };

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
        <button
          type="button"
          ref={standardOrderRef}
          className="card btn btn-outline-success"
          value="STANDARD"
          onClick={orderStandardHandler}
        >
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
        <button
          type="button"
          ref={premiumOrderRef}
          className="card btn btn-outline-success premium"
          value="PREMIUM"
          onClick={orderPremiumHandler}
        >
          Order Premium
        </button>
      </div>
      {orderError ? (
        <h6 className="card-order-error">{orderMessage}</h6>
      ) : (
        <h6 className="card-order-success">{orderMessage}</h6>
      )}
    </div>
  );
}
