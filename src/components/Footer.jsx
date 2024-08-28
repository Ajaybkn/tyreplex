import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="container card mt-5"
        style={{ backgroundColor: "rgb(255, 234, 170)" }}
      >
        <div className=" row ">
          <div className="col-lg-6 mt-4 mb-4">
            <span className=" fw-bold">Have a question about Tyres?</span>
            <p className="text-secondary">
              Get an answer in 24 hours from our experts.
            </p>
            <input
              type="email"
              className="form-control border-success w-75"
              id="exampleFormControlInput1"
              placeholder="Ask or search your question."
              style={{ borderRadius: "26px" }}
            />
          </div>
          <div className="col-lg-4">
            <img
              className="float-end  mt-4"
              style={{ height: "6rem" }}
              src="/man.webp"
            />
          </div>
        </div>
      </div>

      <div className="container " style={{ backgroundColor: "white" }}>
        <div className="row  ">
          <div className="col-lg-3 mt-3 ">
            <img src="/images.jpg" className="h-25" />
            <br />

            <img
              src="/fb.webp"
              className="mt-2 ms-4"
              style={{ height: "25px" }}
            />
            <img src="/insta.webp" className="mt-2 ms-4" />
          </div>
          <div className="col-lg-3 mt-3">
            <span className="text-secondary">Who We Are</span>
            <br />
            <span className="text-secondary">Are you a Tyre Dealer?</span>
          </div>
          <div className="col-lg-3 mt-3">
            <span className="text-secondary">Privacy Policy</span>
            <br />
            <span className="text-secondary">Terms of use</span>
          </div>
          <div className="col-lg-3 mt-3">
            <span className="text-secondary">Contact us</span>
            <br />
            <span className="text-secondary">career</span>
            <br />
            <span className="text-secondary">Shipping & Return Policy</span>
          </div>
          <hr style={{ marginTop: "-45px" }} />
          <span className="d-flex justify-content-center mb-4 ">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
