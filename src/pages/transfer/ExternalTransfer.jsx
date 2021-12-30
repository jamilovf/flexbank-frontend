import React from "react";
import "./InternalTransfer.css";

export default function ExternalTransfer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-7">
          <form className="mt-4">
            <h2>External Transfer</h2>
            <div className="mb-3">
              <label htmlFor="inputIBAN" className="form-label">
                IBAN
              </label>
              <input type="text" className="form-control" id="inputIBAN" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputSwiftCode" className="form-label">
                Swift code
              </label>
              <input type="text" className="form-control" id="inputSwiftCode" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputBankName" className="form-label">
                Bank name
              </label>
              <input type="text" className="form-control" id="inputBankName" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputAmount" className="form-label">
                Amount
              </label>
              <input type="text" className="form-control" id="inputAmount" />
            </div>
            <div className="mb-3 choose">
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Choose card</option>
                <option value="1">Card: **** 1586</option>
                <option value="2">Card: **** 1620</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Transfer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
