import React from "react";
import "./Loan.css";

export default function PersonalLoan() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form className="mt-4">
            <h2>Loan Calculator</h2>
            <div className="mb-3">
              <label htmlFor="inputAmount" className="form-label">
                Amount
              </label>
              <input type="text" className="form-control" id="inputAmount" />
            </div>
            <div className="mb-3 choose">
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Period</option>
                <option value="1">3 months</option>
                <option value="2">6 months</option>
                <option value="3">9 months</option>
                <option value="4">12 months</option>
                <option value="5">24 months</option>
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
                placeholder="9%"
                disabled
              />
            </div>
            <button type="submit" className="loan btn btn-primary">
              Calculate
            </button>
          </form>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <form className="mt-4">
            <h2>Personal Loan Request</h2>
            <div className="mb-3">
              <label htmlFor="inputAmount" className="form-label">
                Amount
              </label>
              <input type="text" className="form-control" id="inputAmount" />
            </div>
            <div className="mb-3 choose">
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Period</option>
                <option value="1">3 months</option>
                <option value="2">6 months</option>
                <option value="3">9 months</option>
                <option value="4">12 months</option>
                <option value="5">24 months</option>
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
                placeholder="9%"
                disabled
              />
            </div>
            <button type="submit" className="loan btn btn-primary">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
