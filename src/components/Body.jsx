import React, { useState } from "react";
import Reviews from "./Reviews";
import Deals from "./Deals";

const Body = () => {
  // State to manage which image is clicked
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with the selected image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="container card text-center mt-2 w-100 ">
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
              className="float-start mt-1 d-flex"
              style={{ maxWidth: "450px", fontSize: "14px" }}
            >
              <span className="me-2">📌</span>
              <span>
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
              <span className="me-2">🕛</span>
              <span>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
            </span>
            <br />
            <br />
            <span className="float-start d-flex">
              <button className="btn btn-outline-danger m-2 p-2">
                GET DIRECTIONS
              </button>
            </span>
            <br />
            <br />
            <br />
            <span className="float-start fw-bold">2278 Google Reviews</span>
          </div>

          {/* Second column with carousel */}
          <div className="col-lg-6">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* Carousel item with two images */}
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="d-flex justify-content-center">
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                {/* Another carousel item with two images */}
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="d-flex justify-content-center">
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                {/* Another carousel item with two images */}
                <div className="carousel-item">
                  <div className="d-flex justify-content-center">
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src="../../public/ceat2.jpg"
                      className="d-block w-50 m-1"
                      alt="..."
                      onClick={() => openModal("../../public/ceat2.jpg")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Bootstrap Modal */}
        {selectedImage && (
          <div
            className="modal fade show"
            style={{ display: "block" }}
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
    </div>
  );
};

export default Body;
