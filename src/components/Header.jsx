import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";

const Header = () => {
  return (
    <div className="card">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src="/images.jpg"
            style={{ height: "35px", marginRight: "10rem" }}
            alt="Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Car Tyres Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownCarTyreLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car Tyres
                </a>
                <ul
                  className="dropdown-menu "
                  style={{ width: "200px", fontFamily: "sans-serif" }}
                  aria-labelledby="dropdownCarTyreLink"
                >
                  <span className="ms-2">Popular Car Tyre Brands</span>
                  {/* Dropdown items */}
                  {[
                    "MRF Tyres",
                    "CEAT Tyres",
                    "Apollo Tyres",
                    "Bridgestone Tyres",
                    "JK Tyres",
                    "Michelin Tyres",
                    "Pirelli Tyres",
                    "All Car Tyres",
                  ].map((brand, index) => (
                    <li key={index}>
                      <a className="dropdown-item fw-bold" href="#">
                        {brand}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Bike Tyres Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownBikeTyreLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bike Tyres
                </a>
                <ul
                  className="dropdown-menu "
                  style={{ width: "200px" }}
                  aria-labelledby="dropdownBikeTyreLink"
                >
                  <span className="ms-2">Popular Bike Tyre Brands</span>
                  {/* Dropdown items */}
                  {[
                    "MRF Tyres",
                    "CEAT Tyres",
                    "Apollo Tyres",
                    "Bridgestone Tyres",
                    "JK Tyres",
                    "Michelin Tyres",
                    "Pirelli Tyres",
                    "All Bike Tyres",
                  ].map((brand, index) => (
                    <li key={index}>
                      <a className="dropdown-item fw-bold" href="#">
                        {brand}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Other navbar items */}
              <li className="nav-item">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                >
                  Tyre Pressure
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownCommercialTyreLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial Tyre
                </a>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownCommercialTyreLink"
                >
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      All Commercial Tyres
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownAccessoriesLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accessories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownAccessoriesLink"
                >
                  {["Accessories", "Batteries", "Alloy Wheels"].map(
                    (item, index) => (
                      <li key={index}>
                        <a className="dropdown-item fw-bold" href="#">
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownMoreLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMoreLink"
                >
                  {[
                    "Cash Back Offers",
                    "Find Tyre Dealers",
                    "Company Tyres",
                    "Are you a Tyre Dealer",
                    "Wheel Balancing",
                    "Wheel Alignment",
                  ].map((item, index) => (
                    <li key={index}>
                      <a className="dropdown-item fw-bold" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item ms-5">
                <span>
                  <img
                    src="/login.jpg"
                    style={{ height: "25px" }}
                    alt="Login"
                  />
                </span>
                <button id="btn" className="btn btn-outline-primary ms-2">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
