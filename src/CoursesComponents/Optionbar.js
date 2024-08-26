import React from "react";
import { useNavigate } from "react-router-dom";


function Optionbar() {
  const navigate=useNavigate()
  return (
    <nav
      className="navbar navbar-registration navbar-expand-lg navbar-dark bg-light d-flex align-item-center justify-content-center"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <img
          width="150"
          src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
          className="attachment-large size-large wp-image-238"
          alt=""
          decoding="async"
        />
        <button
          className="navbar-toggler top-bar2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarsExample07XL">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-lg-flex align-items-lg-center justify-content-lg-end w-100">
            <li className="nav-item">
            <a
                className="nav-link nav-text-color   ms-lg-5 "
                aria-current="page"
                href=""
                style={{ "font-size": "20px", "width":"200px" }}
                onClick={()=>navigate('/Mycourses')}
              >
                <i className=" fa fa-book fs-4 "></i>{" "}My Courses
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Optionbar;
