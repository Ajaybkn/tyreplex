import React from "react";
import "../App.css";

const PaymentMode = () => {
  return (
    <div className="container card mt-5 ">
      <span className="mt-3 mb-4 fw-bold">Payment Mode</span>

      <div className="payment-list mb-5">
        <ul className="list-group list-group-horizontal flex-wrap d-flex justify-content-evenly">
          <li className="list-group-item">✅ Deposit to Account</li>
          <li className="list-group-item">✅ Credit Card/Debit Card</li>
          <li className="list-group-item">
            ✅ Wallets (PayTM/PhonePe/Amazon etc.)
          </li>
          <li className="list-group-item">✅ Net Banking</li>
          <li className="list-group-item">✅ UPI</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentMode;
