import React from "react";
import "./InternalTransfer.css";
import TransferForm from "./TransferForm";

export default function InternalTransfer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-7">
          <TransferForm
            transferType="Internal"
            title1="Card number"
            title2="First name on card"
            title3="Last name on card"
            url="transferInternal"
          />
        </div>
      </div>
    </div>
  );
}
