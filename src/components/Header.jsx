import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
  return (
    <div className="card">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <img
            src="../../public/images.jpg"
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownAccLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car Tyres
                </a>
                <ul
                  className="dropdown-menu mt-2"
                  style={{ width: "200px" }}
                  aria-labelledby="dropdownAccLink"
                >
                  <span className="ms-2">Popular Car Tyre Brands</span>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      MRF Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      CEAT Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Apollo Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Bridgestone Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      JK Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Michelin Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Pirelli Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      All Car Tyres
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownAccLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bike Tyres
                </a>
                <ul
                  className="dropdown-menu mt-2"
                  style={{ width: "200px" }}
                  aria-labelledby="dropdownAccLink"
                >
                  <span className="ms-2">Popular Bike Tyre Brands</span>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      MRF Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      CEAT Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Apollo Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Bridgestone Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      JK Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Michelin Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Pirelli Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      All Bike Tyres
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                >
                  Tyre Pressure
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold hover-border-bottom"
                  style={{ color: "#130F26" }}
                  href="#"
                  role="button"
                  id="dropdownTyreLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial Tyre
                </a>
                <ul
                  className="dropdown-menu mt-2"
                  aria-labelledby="dropdownTyreLink"
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
                  id="dropdownAccLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accessories
                </a>
                <ul
                  className="dropdown-menu mt-2"
                  aria-labelledby="dropdownAccLink"
                >
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Batteries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Alloy Wheels
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
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul
                  className="dropdown-menu mt-2"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Cash Back Offers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Find Tyre Dealers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Company Tyres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Are you a Tyre Dealer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Wheel Balancing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Wheel Alignment
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary">Login</button>
        </div>
      </nav>

      <style jsx>{`
        .dropdown-menu {
          display: none;
        }

        .hover-border-bottom:hover {
          border-bottom: 2px solid red;
        }

        .nav-item:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Header;
