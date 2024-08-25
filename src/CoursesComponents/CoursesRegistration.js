import React, { useState } from "react";
import CourseCard from "./CourseCard";

function CoursesRegistration() {
 
  return (
    <section class="container card-section mt-5">
      <h1 style={{ "text-align": "center" }} className="mb-5">
        Popular <span style={{ color: " rgba(246, 0, 50,)" }}> Courses </span>
      </h1>
      <div class="row d-flex align-items-stratch justify-content-center marginonsmallscree">
        {<CourseCard />}
      </div>
    </section>
  );
}

export default CoursesRegistration;
