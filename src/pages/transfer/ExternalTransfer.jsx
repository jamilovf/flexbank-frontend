import React from "react";
import "./InternalTransfer.css";
import TransferForm from "./TransferForm";

export default function ExternalTransfer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-7">
          <TransferForm
            transferType="External"
            title1="IBAN"
            title2="Swift code"
            title3="Recipient name"
            url="transferExternal"
          />
        </div>
      </div>
    </div>
  );
}
