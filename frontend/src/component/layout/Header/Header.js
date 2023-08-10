import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Elogo300150.png";
import PersonIcon from "@material-ui/icons/Person";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { Link } from "react-router-dom";
import "../../../App.css";
import { useSelector } from "react-redux";



const Header = () => {
  const {isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <header className="">
        <div className="container-fluid p-0">
          <div className="row m-0 p-0">
            <div className="col-sm-3 col-md-6 m-0">
              <p className="text-white">
                Free Shipping Over 1000/- And Free Retrun
              </p>
            </div>
            <div className="col-sm-9 col-md-6">
              <p className="text-white text-end">
                HotLine<a> +91 90005 90005</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-toggler-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{color:'white'}} ></span>
          </button>

          <Link to={"/"} className="navbar-brand  text-white m-0 p-0 ">
            E - COMMERCE.
          </Link>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mx-auto m-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active text-white"
                  aria-current="page"                 
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/products"}
                  className="nav-link active text-white"
                  aria-current="page"                 
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contact"}
                  className="nav-link active text-white"
                  aria-current="page"
                  
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/about"}
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={isAuthenticated ? "/" : "/login"}
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  {isAuthenticated ? true : <PersonIcon />} {/* Conditionally render the icon */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
        .navbar-toggler-white {
          background-color: white;
        }
        .navbar-light .navbar-toggler-icon {
          color: white;
        }
      `}
      </style>
    </>
  );
};
export default Header;
