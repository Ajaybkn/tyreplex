import React, { useState } from "react";
import { services } from "../utils/reviews";
import "../App.css";

const ServicesOffered = () => {
  const [data, setData] = useState(services);

  return (
    <div className="container card mt-2 w-100">
      <span className="float-start fw-bold">
        Services offered by this dealer
      </span>

      <div className="scroll-container d-flex mt-3">
        {data.map((service) => (
          <div
            className="card mt-1 mb-2 me-3  p-3 effect  position-relative d-flex justify-content-center align-items-center"
            style={{ width: "20rem", height: "13rem" }}
            key={service.id}
          >
            <img
              src={service.link}
              alt="Service"
              className="mt-4"
              style={{ width: "6rem", height: "4rem" }}
            />
            <span
              className="fw-bold mt-3 mb-3"
              style={{ fontFamily: "sans-serif" }}
            >
              {service.name}
            </span>
            <button className="btn btn-danger mb-4 mt-2">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;
