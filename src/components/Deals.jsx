import React, { useState } from "react";
import { deals } from "../utils/reviews";

const Deals = () => {
  const [data, setData] = useState(deals);

  return (
    <div className="container card  mt-2 w-100 ">
      <span className="float-start ">Deals In</span>
      <br />
      <div className="scroll-container d-flex">
        {data.map((deal) => (
          <div key={deal.id} className="mt-0 me-2">
            <div
              className="card mt-0 mb-2 position-relative"
              style={{ width: "9rem", height: "5rem" }}
            >
              <img
                src={deal.link}
                className="card-img-top h-100 w-100"
                alt="..."
              />
              <div
                className="name-position text-black"
                style={{ width: "100%", textAlign: "center" }}
              >
                <p className="card-text mb-0">{deal.name}</p>
              </div>
            </div>
          </div>
        ))}
        <style jsx>{`
          .scroll-container {
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
          }
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .name-position {
            position: absolute;
            top: 55px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Deals;
