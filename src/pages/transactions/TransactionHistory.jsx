import React, { useEffect, useState } from "react";
import "./TransactionHistory.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import TransactionService from "../../api/transactionService";
import { convertDate, formattedBalance } from "../../common/helper";

export default function TransactionHistory() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [transactions, settransactions] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [realPageCount, setrealPageCount] = useState(1);
  const [pageGroup, setpageGroup] = useState(0);
  const [transferCheck, settransferCheck] = useState("");
  const [paymentCheck, setpaymentCheck] = useState("");
  const [isSearched, setisSearched] = useState(false);

  useEffect(() => {
    let transactionService = new TransactionService();

    transactionService
      .getPageCount()
      .then((response) => {
        setrealPageCount(response.data);
        if (response.data > 16) {
          setpageCount(16);
        } else {
          setpageCount(response.data);
        }
      })
      .catch((error) => {});

    transactionService
      .getAll(1)
      .then((response) => {
        settransactions(response.data);
      })
      .catch((error) => {});
  }, []);

  const pageClickHandler = (page) => {
    let transactionService = new TransactionService();

    const from = convertDate(fromDate);
    const to = convertDate(toDate);
    const type1 = transferCheck;
    const type2 = paymentCheck;

    if (isSearched) {
      transactionService
        .searchTransactions(page, from, to, type1, type2)
        .then((response) => {
          settransactions(response.data);
        })
        .catch((error) => {});
    } else {
      transactionService
        .getAll(page)
        .then((response) => {
          settransactions(response.data);
        })
        .catch((error) => {});
    }
  };

  const nextClickHandler = () => {
    if (realPageCount - 16 < 0) {
      console.log("No Next Page");
    } else if (realPageCount - 16 > 16) {
      setpageGroup(pageGroup + 1);
      setrealPageCount(realPageCount - 16);
      setpageCount(16);
    } else {
      setpageGroup(pageGroup + 1);
      setrealPageCount(realPageCount - 16);
      setpageCount(realPageCount - 16);
    }
  };

  const previousClickHandler = () => {
    if (pageGroup - 1 < 0) {
      console.log("No Previous Page");
    } else {
      setpageCount(16);
      setrealPageCount(realPageCount + 16);
      setpageGroup(pageGroup - 1);
    }
  };

  const searchClickHandler = () => {
    setisSearched(true);
    let transactionService = new TransactionService();

    const from = convertDate(fromDate);
    const to = convertDate(toDate);
    const type1 = transferCheck;
    const type2 = paymentCheck;

    transactionService
      .searchTransactions(1, from, to, type1, type2)
      .then((response) => {
        settransactions(response.data);

        setrealPageCount(response.data[0].count);
        if (response.data[0].count > 16) {
          setpageCount(16);
        } else {
          setpageCount(response.data[0].count);
        }
      })
      .catch((error) => {});
  };

  const checkboxHandler = (event) => {
    if (event.target.value === "Transfer") {
      event.target.checked
        ? settransferCheck("Transfer")
        : settransferCheck("");
    } else {
      event.target.checked ? setpaymentCheck("Payment") : setpaymentCheck("");
    }
  };

  return (
    <div className="transaction container">
      <div className="row">
        <div className="col">
          <form className="transaction">
            <div className="transaction form-group">
              <label htmlFor="datepicker-from">From</label>
              <div className="input-group date" id="datepicker-from">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
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
                  dateFormat="yyyy/MM/dd"
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
                value="Transfer"
                id="transferCheck"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="transferCheck">
                Transfer
              </label>
            </div>
            <div className="transaction form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Payment"
                id="paymentCheck"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="paymentCheck">
                Payment
              </label>
            </div>
            <button
              type="button"
              className="transaction btn btn-primary"
              onClick={searchClickHandler}
            >
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
              {transactions.map((transaction, index) => {
                return (
                  <tr key={index + 1}>
                    <th scope="row">
                      {index + 1 + transaction.limit * transaction.page}
                    </th>
                    <td>{transaction.description}</td>
                    <td>{formattedBalance(transaction.amount)} $</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.createdAtDate}</td>
                    <td>{transaction.createdAtTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav className="pagination-nav" aria-label="Page navigation">
            <ul className="pagination">
              <Link className="page-link" to="#">
                <li onClick={previousClickHandler} className="page-item">
                  Previous
                </li>
              </Link>
              {[...Array(pageCount)].map((x, i) => {
                return (
                  <Link
                    key={i + 1 + pageGroup * 16}
                    className="page-link"
                    to="#"
                  >
                    <li
                      onClick={() => pageClickHandler(i + 1 + pageGroup * 16)}
                      className="page-item"
                    >
                      {i + 1 + pageGroup * 16}
                    </li>
                  </Link>
                );
              })}
              <Link className="page-link" to="#">
                <li onClick={nextClickHandler} className="page-item">
                  Next
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
