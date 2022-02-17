import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LoanNotificationService from "../../api/loanNotificationService";
import { capitalizeFirstLetter } from "../../common/helper";
import "./LoanNotifications.css";

export default function LoanNotifications() {
  const [loanNotifications, setloanNotifications] = useState([]);

  useEffect(() => {
    let loanNotificationService = new LoanNotificationService();

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
