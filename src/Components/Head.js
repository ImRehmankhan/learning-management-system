import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Head() {
  return (
    <section className="top-bar2  d-flex align-items-center justify-content-center">
      <div className="container ">
        <div className="row  ">
          <div className="col-lg-9 col-md-9 bar-left">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <span>
                  <a href="tel:+92034321118">0303-4321118</a> |{" "}
                  <a href="tel:+92184321118">0323-1230488</a>
                </span>
              </li>
              <li className="list-inline-item">
                <span>
                  <a href="#">support@pftpedu.org</a>
                </span>
              </li>
              <li className="list-inline-item">
                <a href="">General Head Office, Model Town, Lahore, Punjab</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 bar-right d-flex justify-content-end">
              <ul className="list-unstyled list-inline bar-social">
                <li className="list-inline-item  ">
                  <a href="#" rel="noopener noreferrer" className=" head-icon">
                    <FaSquareFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="noopener noreferrer" className=" head-icon">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="noopener noreferrer" className=" head-icon">
                    <FaSquareTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" rel="noopener noreferrer" className=" head-icon">
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
