import React, { useEffect, useState } from "react";
import AdminService from "../../api/adminService";
import { formattedBalance } from "../../common/helper";
import "./AdminLoanRequest.css";

export default function AdminLoanRequests() {
  const [loanRequests, setloanRequests] = useState([]);

  useEffect(() => {
    let adminService = new AdminService();

    adminService
      .getAllLoanRequestNotifications()
      .then((response) => {
        setloanRequests(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
            <h2 className="mt-2">Loan Request Notifications</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Period</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loanRequest, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{loanRequest.firstName}</td>
                    <td>{loanRequest.lastName}</td>
                    <td>{loanRequest.type}</td>
                    <td>{formattedBalance(loanRequest.amount)} $</td>
                    <td>
                      {loanRequest.period}{" "}
                      {loanRequest.type == "CAR" ? "year" : "months"}
                    </td>
                    <td><button className="alr btn btn-primary">Accept</button></td>
                    <td><button className="alr btn btn-danger">Decline</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
