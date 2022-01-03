import React, { useEffect, useRef, useState } from "react";
import LoanRequestService from "../../api/loanRequestService";

export default function LoanRequest(props) {
  const [requestResult, setrequestResult] = useState("");

  const periodRef = useRef();
  const amountRef = useRef();

  const submitHandler = () => {
    let loanRequestService = new LoanRequestService();
    const amount = amountRef.current.value;
    const period = periodRef.current.value;

    loanRequestService
      .requestLoan(props.url, { amount, period })
      .then((response) => {
          setrequestResult(response.data);
      })
      .catch((error) => {
          setrequestResult("Something get wrong.")
      });
  };

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      <h2>{props.loanType} Loan Request</h2>
      <div className="mb-3">
        <label htmlFor="inputAmount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          ref={amountRef}
          className="form-control"
          id="inputAmount"
        />
      </div>
      <div className="mb-3 choose">
        <select
          className="form-select"
          ref={periodRef}
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
          className="form-control"
          id="inputInterestRate"
          value={props.rate}
          placeholder={props.rateValue}
          disabled
        />
      </div>
      <button type="submit" className="btn loan btn-primary">
        Send Request
      </button>
      {requestResult  && (
        <h6 className="loan-result">
            {requestResult}
        </h6>
      )}
    </form>
  );
}
