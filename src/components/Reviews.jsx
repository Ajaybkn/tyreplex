import React, { useState } from "react";
import { reviews } from "../utils/reviews";

const Reviews = () => {
  const [data, setData] = useState(reviews);

  return (
    <div className="container ">
      <div className="row">
        {data.map((review) => {
          return (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center "
              key={review.id}
            >
              <div
                className="card mb-4 p-2 effect"
                style={{ width: "100%", maxWidth: "30rem", height: "180px" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src="../../public/pic.png"
                      className="img-fluid"
                      style={{ height: "60px", marginRight: "10px" }}
                      alt="Profile"
                    />
                    <div>
                      <h6 className="card-subtitle mb-2 fw-bold">
                        {review.name}
                      </h6>
                      <p className="card-text text-secondary">
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
