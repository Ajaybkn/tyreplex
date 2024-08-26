import React, { useState } from "react";
import { reviews } from "../utils/reviews";
const Reviews = () => {
  const [data, setData] = useState(reviews);
  console.log(data, "ueiu");
  return (
    <div className="d-flex ">
      {data.map((review) => {
        return (
          <div
            className="card mb-4 p-2 m-2 "
            key={review.id}
            style={{ width: "30rem", height: "180px" }}
          >
            <div className="card-body">
              <span className="card-title float-start">
                <img src="../../public/pic.png" style={{ height: "60px" }} />
              </span>
              <br />

              <h6 className="card-subtitle mb-2 float-start text-body-secondary ms-2 fw-bold ">
                {review.name}
              </h6>
              <p className="card-text float-start text-start">
                {review.review}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
