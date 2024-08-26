import React, { useState } from "react";
import "./Payment.css";
import { useLocation, Link } from "react-router-dom";
function PaymentForm() {
  const [displayChallan,setDisplayChallan]=useState("invoice-area d-none ")
  const [displayInvoice,setDisplayInvoice]=useState("row marginonsmallscree d-flex align-items-center justify-content-center")

  const location = useLocation();
  const { courseDetails } = location.state || {};
  const dispaychallan = () => {
    
    setDisplayChallan("invoice-area mb-5 ")
    setDisplayInvoice("row marginonsmallscree d-none d-flex align-items-center justify-content-center")
  };
  return (
    <div className="container  mt-5 main-payment-container">
      <div className={displayInvoice}>
        <div className="card box1 shadow-sm col-md-12 col-lg-5  p-md-5 p-4">
          <h5 className="text-center fw-bold">Payment Summary</h5>
          <div className="fw-bolder mb-4">
            <span className="fas fa-dollar-sign fw-normal"></span>
            <span className="ps-1 fw-normal">{courseDetails.price}</span>
            <br />
            <span className="ps-1 fw-normal">{courseDetails.course_name}</span>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between text">
              <span className="fw-bold">Discount (0%)</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">0</span>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between text mb-4">
              <span className="fw-bold">Sub Total</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">{courseDetails.price}</span>
              </span>
            </div>
            <div className="border-bottom mb-4"></div>
            <div className="d-flex align-items-center justify-content-between text mb-4">
              <span className="fw-bold">Grand Total</span>
              <span className="fas fa-dollar-sign">
                <span className="ps-1">{courseDetails.price}</span>
              </span>
            </div>

            <div className="border-bottom mb-4"></div>
            <button
              className="apply-btn btns text-center w-100"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              {" "}
              Generate Invoice
            </button>
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
      </div>
      <section className={displayChallan} id="invoicearea">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Batch</th>
                      <th>Invoice #</th>
                      <th>Amount</th>
                      <th>Courses</th>
                      <th>Status</th>
                      <th>Last Date</th>
                      <th>Download Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="badge badge-warning">20</span>
                      </td>
                      <td>
                        <span>{`1000082${parseInt(
                          Math.random() * 59999
                        )}`}</span>
                        <i
                          className="fa fa-trash ml-2 text-danger"
                          title="Remove Invoice"
                        ></i>
                        <p className="text-danger">
                          <small>
                            Pay your fee via 1 Link using this invoice number
                            through any online banking platform.
                          </small>
                        </p>
                        <Link to="/payment">
                          <p>
                            <small className="text-danger">
                              <i className="fa fa-play"></i> How to Pay?
                            </small>
                          </p>
                        </Link>
                      </td>

                      <td>
                        {" "}
                        <i className="fas fa-dollar-sign"></i>
                        {courseDetails.price}
                      </td>
                      <td>
                        <span className="badge badge-success mr-2">
                          {courseDetails.course_name}
                        </span>
                        <span className="badge badge-success mr-2">
                          MERN Stack
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-danger text-light">
                          Unpaid
                        </span>
                        <p>
                          <small>
                            You will get verification email after paying your
                            fee
                          </small>
                        </p>
                      </td>
                      <td>30th Aug 24</td>
                      <td className="text-center">
                        <a target="_blank" href="assets/Challan/challan.pdf">
                          <button className="btn btn-info btn-sm">
                            <i className="fa fa-arrow-down"></i>
                          </button>
                        </a>
                        <p className="text-danger">
                          <small>
                            Download invoice to pay in any 1 link bank
                          </small>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div
          class="modal fade "
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content ">
              <div class="modal-body ">
                <div class="text-right">
                  {" "}
                  <i class="fa fa-close close" data-dismiss="modal"></i>{" "}
                </div>

                <div class="px-4 py-5">
                  <h1 class="  mb-2 fw-bold text-center">Are you sure?</h1>
                  <p className="text-center"><span class=" ">Your invoice amount is </span>{" "}
                  <span class="font-weight-bold ">{`$${courseDetails.price}`}</span></p>
                  
                  <div class="text-center mt-5">
                    <button class="btn btn-primary gen-invice-btn"data-dismiss="modal" onClick={dispaychallan}> GENERATE INVOICE </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
