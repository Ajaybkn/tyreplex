import React, { useState } from "react";
import Reviews from "./Reviews";
import Deals from "./Deals";
import "../App.css";
import { images } from "../utils/reviews";
import ServicesOffered from "./ServicesOffered";
import FilterComp from "./FilterComp";
import PaymentMode from "./PaymentMode";
import Footer from "./Footer";

const Body = () => {
  const [data, setData] = useState(images);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="container card text-center mt-2 w-100">
        {/* Row wrapper */}
        <div className="row">
          {/* First column */}
          <div className="col-12 col-md-10 col-lg-6 p-2">
            <span className="float-start fw-bold">
              SHREE HEMKUNT TYRES AND SERVICES
              <span className="text-success ms-2">✅ verified</span>
            </span>
            <br />
            <span className="float-start mt-3">
              <span className="badge text-bg-success me-2">4.9</span>
              ⭐⭐⭐⭐⭐ 2278 Reviews{" "}
              <button className="btn btn-outline-dark btn-sm">Rate</button>
            </span>
            <br />
            <br />
            <span
              className="float-start mt-1 d-flex text-start"
              style={{ maxWidth: "450px", fontSize: "14px" }}
            >
              <span className="me-4">📌</span>
              <span style={{ fontFamily: "sans-serif" }}>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </span>
            </span>
            <br />
            <br />
            <span
              className="float-start mt-1 d-flex"
              style={{ maxWidth: "400px", fontSize: "14px" }}
            >
              <span className="me-4">🕛</span>
              <span className="text-secondary">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </span>
            </span>
            <br />
            <br />
            <span className="float-start d-flex">
              <button className="btn btn-outline-danger m-2 p-2 ms-4">
                GET DIRECTIONS
              </button>
            </span>
            <br />
            <br />
            <br />
            <span
              className="float-start fw-bold ms-3"
              style={{ fontFamily: "sans-serif" }}
            >
              2278 Google Reviews
            </span>
          </div>

          {/* Image gallery column */}
          <div className="d-flex auto-scroll col-lg-6">
            {data.map((image) => (
              <div className="mt-0 me-4" key={image.id}>
                <div
                  className="card mt-4 mb-2"
                  style={{ width: "18rem", height: "10rem" }}
                >
                  <img
                    src={image.link}
                    className="card-img-top h-100 w-100 me-3"
                    alt="images"
                    onClick={() => openModal(image.link)}
                    style={{ cursor: "pointer" }} // Add cursor pointer for better UX
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bootstrap Modal */}
        {selectedImage && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedImage}
                    className="img-fluid"
                    alt="Modal Content"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Reviews />
      </div>
      <Deals />
      <ServicesOffered />
      <FilterComp />
      <span className="container mt-4 d-flex text-secondary">
        Home /Tyre Dealers/ Tyre Dealers Ghaziabad/ SHREE HEMKUNT TYRES AND
        SERVICES
      </span>
      <PaymentMode />
      <Footer />
    </div>
  );
};

export default Body;
