import React from 'react';
import "./Cards.css";
import visaLogo from "../../img/visa-logo.svg";

export default function Cards() {
    return (
<div className="main-container">
    <div className="flexcard">
      <div className="card-body">
        <i className="fas fa-info-circle"></i>
        <h4 className="card-text">In case of fraud detection or stolen amount:</h4>
        <ol>
         <h5><li className="block">Block your card.</li></h5> 
         <h5><li>Contact us from Contact Us section</li></h5> 
        </ol>
      </div>
    </div>
    <div className="scene">
      <div className="my__card">
        <div className="card__front">
          <img src={visaLogo} className="card__logo" alt='...'/>
          <div className="card__number number">
            <div className="number-group number-group--0">4011</div>
            <div className="number-group number-group--1">****</div>
            <div className="number-group number-group--2">****</div>
            <div className="number-group number-group--3">1586</div>
            <button type="button" className="btn btn-danger">Block</button>
          </div>
          <div className="card__details">
            <div className="card__holder">
              <span className="card__holder__title">Card Holder</span>
              <span className="card__holder__name">John Williams</span>
            </div>
            <div className="card__expiration">
              <span className="card__expiration__title">Expires</span>
              <span className="card__expiration__date">11/28</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="card btn btn-outline-success">Balance: 10,000 USD</button>
      <div className="my__card premium">
        <div className="card__front">
          <img src={visaLogo} className="card__logo" alt='...'/>
          <div className="card__number number">
            <div className="number-group number-group--0">4011</div>
            <div className="number-group number-group--1">****</div>
            <div className="number-group number-group--2">****</div>
            <div className="number-group number-group--3">1620</div>
            <button type="button" className="btn btn-danger">Block</button>
          </div>
          <div className="card__details">
            <div className="card__holder">
              <span className="card__holder__title">Card Holder</span>
              <span className="card__holder__name">John Williams</span>
            </div>
            <div className="card__expiration">
              <span className="card__expiration__title">Expires</span>
              <span className="card__expiration__date">05/28</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="card btn btn-outline-success premium">Balance: 50,000 USD</button>
    </div>
  </div>
    )
}
