import React, { useState } from "react";
import CourseCard from "./CourseCard";

function CoursesRegistration() {
  return (
    <section class="container card-section ">
     
        <nav
          class="navbar  navbar-expand-lg navbar-dark mb-3  "
          aria-label="Ninth navbar example"
        >
          <div class="container-xl  ">
          <a
                className="nav-link nav-text-color btn btn-danger text-light   ms-lg-5 "
                aria-current="page"
                href=""
                style={{ "font-size": "20px", "width":"200px" }}
              >
                <i className=" fa fa-book "></i>{" "}My Courses
              </a>
            <button
              class="navbar-toggler top-bar2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07XL"
              aria-controls="navbarsExample07XL"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ms-5 " id="navbarsExample07XL">
              <ul class="navbar-nav me-auto mb-2  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link  nav-text-color fs-5 " href=""> All Courses</a>
            </li>
            <li class="nav-item">
                <a class="nav-link  nav-text-color fs-5" href="">Course Category</a>
            </li>
              </ul>
              <nav class="navbar navbar-header-left text-dark navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                <div class="input-group  ">
                  <div class="input-group-prepend">
                    <button type="submit" class="btn btn-search pe-1">
                      <i class="fa fa-search "></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="input-text-color "
                  />
                </div>
              </nav>
            </div>
          </div>
        </nav>
        <h1 style={{ "text-align": "center" }} >
      We Do What We Love To Do.</h1>
      <h2 style={{ "text-align": "center" }} className="mb-5">Find the Best Course To Fit Your Needs.</h2> 
    
      <div class="row d-flex align-items-stratch justify-content-center marginonsmallscree">
        {<CourseCard />}
      </div>
    </section>
  );
}

export default CoursesRegistration;
