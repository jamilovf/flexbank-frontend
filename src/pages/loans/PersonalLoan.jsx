import React from "react";
import "./Loan.css";
import LoanCalculator from "./LoanCalculator";
import LoanRequest from "./LoanRequest";

export default function PersonalLoan() {
  const periodOptions = [
    {
      key: 3,
      value: "3 months",
    },
    {
      key: 6,
      value: "6 months",
    },
    {
      key: 9,
      value: "9 months",
    },
    {
      key: 12,
      value: "12 months",
    },
    {
      key: 24,
      value: "24 months",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <LoanCalculator
            rate="12%"
            rateValue="12"
            periodOptions={periodOptions}
          />
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <LoanRequest
            url="requestPersonalLoan"
            loanType="Personal"
            rate="12%"
            rateValue="12"
            periodOptions={periodOptions}
          />
        </div>
      </div>
    </div>
  );
}
