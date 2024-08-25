import React from "react";
import "./Payment.css";
function PaymentForm() {
  return (
    <div className="container  d-flex align-items-center justify-content-center mt-5 main-payment-container">
      <div className="row marginonsmallscree d-flex align-items-center justify-content-center">
        <div className="card box1 shadow-sm col-md-12 col-lg-3  p-md-5 p-4">
          <div className="fw-bolder mb-4">
            <span className="fas fa-dollar-sign"></span>
            <span className="ps-1">599.00</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between text">
              <span>Commission</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">1.99</span>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mb-4">
              <span>Total</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">600.99</span>
              </span>
            </div>
            <div className="border-bottom mb-4"></div>
            <div className="d-flex flex-column mb-4">
              <span className="far fa-file-alt text">
                <span className="ps-2">Invoice ID:</span>
              </span>
              <span className="ps-3">SN8478042099</span>
            </div>
            <div className="d-flex flex-column mb-5">
              <span className="far fa-calendar-alt text">
                <span className="ps-2">Next payment:</span>
              </span>
              <span className="ps-3">22 July, 2018</span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mt-5">
              <div className="d-flex flex-column text">
                <span>Customer Support:</span>
                <span>online chat 24/7</span>
              </div>
              <div className="btn btn-primary rounded-circle">
                <span className="fas fa-comment-alt"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="card box2 col-md-12 col-lg-6 w-md-100">
          <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
            <span className="h5 fw-bold m-0">Payment methods</span>
            <div className="btn  text-light top-bar2">
              <span className="fas fa-bars "></span>
            </div>
          </div>
          <ul className="nav nav-tabs mb-3 px-md-4 px-2">
            <li className="nav-item">
              <a className="nav-link px-2 active" aria-current="page" href="#">
                Credit Card
              </a>
            </li>
          </ul>
          <div className="px-md-5 px-4 mb-4 d-flex align-items-center"></div>
          <form action="">
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Credit Card</span>
                  <div className="inputWithIcon">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Card no"
                    />
                    <span>
                      <img
                        src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                  <span>
                    Expiration<span className="ps-1">Date</span>
                  </span>
                  <div className="inputWithIcon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="05/20"
                    />
                    <span className="fas fa-calendar-alt text-danger"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span>Code CVV</span>
                  <div className="inputWithIcon">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="123"
                    />
                    <span className="fas fa-lock text-danger"></span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Name</span>
                  <div className="inputWithIcon">
                    <input
                      className="form-control text-uppercase"
                      type="text"
                      placeholder="Your Name"
                    />
                    <span className="far fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="col-12 px-md-5 px-4 mt-3">
                <button className="apply-btn btns text-center w-100">
                  Pay $599.00
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
