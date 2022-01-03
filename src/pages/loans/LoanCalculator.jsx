import React, { useEffect, useRef, useState } from "react";
import { calculateTotalRepayment } from "../../common/helper";
import "./LoanServices.css";

export default function LoanCalculator(props) {
  const calPeriodRef = useRef();
  const calAmountRef = useRef();
  const calRateRef = useRef();
  const [totalRepayment, settotalRepayment] = useState(0);

  useEffect(() => {}, [totalRepayment]);

  const personalLoanCalculateHandler = () => {
    const amount = calAmountRef.current.value;
    const period = calPeriodRef.current.value;
    const rate = calRateRef.current.placeholder;

    const totalRepayment = calculateTotalRepayment(amount, period, rate);
    settotalRepayment(totalRepayment);
  };
  return (
    <form className="mt-4">
      <h2>Loan Calculator</h2>
      <div className="mb-3">
        <label htmlFor="inputAmount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          ref={calAmountRef}
          className="form-control"
          id="inputAmount"
        />
      </div>
      <div className="mb-3 choose">
        <select
          className="form-select"
          ref={calPeriodRef}
          aria-label="Default select example"
        >
          <option defaultValue>Period</option>
          {props.periodOptions.map((periodOption) => {
            return (
              <option value={periodOption.key}>{periodOption.value}</option>
            );
          })}
        </select>
      </div>
      <div className="mb-3 choose">
        <label htmlFor="inputInterestRate" className="form-label">
          Interest Rate
        </label>
        <input
          type="text"
          ref={calRateRef}
          className="form-control"
          id="inputInterestRate"
          value={props.rate}
          placeholder={props.rateValue}
          disabled
        />
      </div>
      <button
        type="button"
        className="btn loan btn-primary"
        onClick={personalLoanCalculateHandler}
      >
        Calculate
      </button>
      {totalRepayment !== 0 && (
        <h6 className="loan-result">
          Total Repayment is: ${isNaN(totalRepayment) ? 0 : totalRepayment.toFixed(2)}
        </h6>
      )}
    </form>
  );
}
