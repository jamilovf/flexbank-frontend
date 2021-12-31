import React, { useState } from "react";
import "./TransactionHistory.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function TransactionHistory() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <div className="transaction container">
      <div className="row">
        <div className="col">
          <form className="transaction">
            <div className="transaction form-group">
              <label htmlFor="datepicker-from">From</label>
              <div className="input-group date" id="datepicker-from">
                <DatePicker
                  className="form-control"
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                />
                <span className="input-group-append">
                  <span className="input-group-text bg-white">
                    <i className="fa fa-calendar"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="transaction form-group">
              <label htmlFor="datepicker-to">To</label>
              <div className="input-group date" id="datepicker-to">
              <DatePicker
                  className="form-control"
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                />
                <span className="input-group-append">
                  <span className="input-group-text bg-white">
                    <i className="fa fa-calendar"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="transaction form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="transferCheck"
              />
              <label className="form-check-label" htmlFor="transferCheck">
                Transfer
              </label>
            </div>
            <div className="transaction form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="paymentCheck"
              />
              <label className="form-check-label" htmlFor="paymentCheck">
                Payment
              </label>
            </div>
            <button type="submit" className="btn transaction btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Green Bank</td>
                <td>$100</td>
                <td>Transfer</td>
                <td>15-10-2021</td>
                <td>13:45</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Internal</td>
                <td>$150</td>
                <td>Transfer</td>
                <td>02-10-2021</td>
                <td>10:05</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Wolt</td>
                <td>$15</td>
                <td>Payment</td>
                <td>25-09-2021</td>
                <td>15:21</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Green Bank</td>
                <td>$100</td>
                <td>Transfer</td>
                <td>15-10-2021</td>
                <td>13:45</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Internal</td>
                <td>$150</td>
                <td>Transfer</td>
                <td>02-10-2021</td>
                <td>10:05</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Wolt</td>
                <td>$15</td>
                <td>Payment</td>
                <td>25-09-2021</td>
                <td>15:21</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Green Bank</td>
                <td>$100</td>
                <td>Transfer</td>
                <td>15-10-2021</td>
                <td>13:45</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Internal</td>
                <td>$150</td>
                <td>Transfer</td>
                <td>02-10-2021</td>
                <td>10:05</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Wolt</td>
                <td>$15</td>
                <td>Payment</td>
                <td>25-09-2021</td>
                <td>15:21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
