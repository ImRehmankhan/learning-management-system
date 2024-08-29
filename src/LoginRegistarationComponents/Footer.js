import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top py-8">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-8 pe-xxl-10">
              <div class="row gy-5">
                <div class="col-6 col-lg-5 pe-5 text-center ">
                  <img
                    width="300"
                    src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
                    className="img-fluid"
                    alt=""
                    decoding="async"
                  />
                  <p className="text-light">
                    Join us on a journey of innovation and discovery as we
                    navigate the ever-evolving landscape of technology together.
                    Welcome to ITSOLERA – where the future of technology begins.
                  </p>
                </div>
				<div className="col-6 col-lg-1"></div>
                
                <div class="col-6 col-lg-5">
                  <h5 class="text-white footer-title-01">Get in Touch</h5>
                    <span className="text-danger fs-5 fw-bold">Address</span><p className="text-light">Javeed Arcade, Office #2A St 3, G-12/1 G-12, Islamabad, Islamabad Capital Territory 46000</p>
					<span className="text-danger fs-5 fw-bold">Phone</span><p className="text-light">+92 333 4471066</p>
					<span className="text-danger fs-5 fw-bold">Email</span><p className="text-light">info@itsolera.com</p>

				</div>
              </div>
            </div>
            <div class="col-lg-4">
              <h5 class="text-white footer-title-01 fs-5">
                Subscribe to our newsletter and get 15% off your next order.
              </h5>
              <div>
                <form class="d-flex flex-row mb-2 p-1 bg-white input-group">
                  <input
                    type="email"
                    class="form-control rounded border-0"
                    placeholder="Your Email"
                  />{" "}
                  <button class="apply-btn btns " type="submit">
                    Subscribe
                  </button>
                </form>
                <p class="fs-sm text-white text-opacity-75">
                  I agree to receive Absolution newsletters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom small py-3 border-top border-white border-opacity-10">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start py-1">
              <p class="m-0 text-white text-opacity-75">
                © 2024 copyright by{" "}
                <a class="text-reset"  >
                  ItSolera
                </a>
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end py-1">
              <ul class="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a   class="text-white text-opacity-75">
                    Privace &amp; Policy
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a   class="text-white text-opacity-75">
                    Faq's
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a   class="text-white text-opacity-75">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
