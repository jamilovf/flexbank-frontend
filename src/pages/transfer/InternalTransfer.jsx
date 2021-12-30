import React from 'react';
import "./InternalTransfer.css";

export default function InternalTransfer() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            <form className="mt-4">
              <h2>Internal Transfer</h2>
              <div className="mb-3">
                <label htmlFor="inputCardNumber" className="form-label">
                  Card number
                </label>
                <input type="text" className="form-control" id="inputCardNumber" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputCardFirstName" className="form-label">
                  First name on card
                </label>
                <input type="text" className="form-control" id="inputCardFirstName" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputCardLastName" className="form-label">
                  Last name on card
                </label>
                <input type="text" className="form-control" id="inputCardLastName" />
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
    )
}
