import React from "react";

const TyreCard = ({ title, size, reviews, price, type, warranty }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100 position-relative effect"
        style={{ overflow: "hidden" }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title">{title}</h6>
            <span
              className="badge bg-warning text-dark "
              style={{
                position: "relative",
                top: "-19px",
                right: "-17px",
              }}
            >
              {warranty}
            </span>
          </div>
          <p className="card-text">{size}</p>
          <div className="row">
            <div className="d-flex align-items-center mb-2 col-lg-6">
              <span className="badge bg-success me-2">4</span>
              <span>{reviews} Reviews</span>
            </div>
          </div>
          <h5 className="card-text">₹ {price}</h5>
          <p className="text-success">Offer available</p>
          <p className="text-muted">{type}</p>
          <img
            src="../../public/singleTyre.webp"
            alt=""
            width={180}
            className="position-absolute"
            style={{ right: "-60px", bottom: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TyreCard;
