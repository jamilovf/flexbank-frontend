import React from 'react';
import "./LoanNotifications.css";

export default function LoanNotifications() {
    return (
<div className="container">
<div className="row">
    <div className="col-3"></div>
    <div className="col-6">
        <div className="card mt-4">
            <h5 className="card-header">Car Loan</h5>
            <div className="card-body">
              <h6 className="card-title">Due to: 20-05-2021</h6>
              <h6 className="card-text rate">Interest rate: 4%</h6>
              <h6 className="card-text amount">Amount: $220</h6>
              <button type="submit" className="btn loann btn-primary">Pay</button>
            </div>
          </div>
          <div className="card mt-4">
            <h5 className="card-header">Personal Loan</h5>
            <div className="card-body">
              <h6 className="card-title">Due to: 27-05-2021</h6>
              <h6 className="card-text rate">Interest rate: 9%</h6>
              <h6 className="card-text amount">Amount: $50</h6>
              <button type="submit" className="btn loann btn-primary">Pay</button>
            </div>
          </div>
    </div>
</div>
    </div>
    )
}
