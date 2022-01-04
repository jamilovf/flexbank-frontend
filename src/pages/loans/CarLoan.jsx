import React from "react";
import "./Loan.css";
import LoanCalculator from "./LoanCalculator";
import LoanRequest from "./LoanRequest";

export default function CarLoan() {
  const periodOptions = [
    {
      key: 1,
      value: "1 year",
    },
    {
      key: 2,
      value: "2 years",
    },
    {
      key: 3,
      value: "3 years",
    },
    {
      key: 4,
      value: "4 years",
    },
    {
      key: 5,
      value: "5 years",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LoanCalculator
            rate="14%"
            rateValue="14"
            periodOptions={periodOptions}
          />
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <LoanRequest
            url="requestCarLoan"
            loanType="Car"
            rate="14%"
            rateValue="14"
            periodOptions={periodOptions}
          />
        </div>
      </div>
    </div>
  );
}
