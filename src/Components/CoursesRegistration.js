import React from "react";

function CoursesRegistration() {
  return (
    <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
      <div className="  w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
        <div className="col-xl-4  col-xxl-3  col-lg-5 col-sm-12 col-md-6 login-row p-3 ">
          <div className="w-100  d-flex align-items-center justify-content-center flex-column">
            <h1 className="h5 h-md-4 font-weight-bold text-center mt-0">
              Course Registration
            </h1>

            <div className="w-100 mt-4">
              <div className="htmlForm-control d-flex align-items-center justify-content-center">
                <button
                  aria-controls="1-collapse-text"
                  type="button"
                  className="btns apply-btn course-btn w-100"
                >
                  Website Development
                </button>
              </div>
              <div className="htmlForm-control mt-3 d-flex align-items-center justify-content-center">
                <button
                  aria-controls="1-collapse-text"
                  type="button"
                  className="btns apply-btn course-btn w-100"
                >
                 Cybersecurity
                </button>
              </div>
              <div className="htmlForm-control   mt-3 d-flex align-items-center justify-content-center">
                <button
                  aria-controls="1-collapse-text"
                  type="button"
                  className="btns apply-btn course-btn w-100"
                >
                 AI and Machine Learning
                </button>
              </div>
              <div className="htmlForm-control  mt-3 d-flex align-items-center justify-content-center">
                <button
                  aria-controls="1-collapse-text"
                  type="button"
                  className="btns apply-btn course-btn w-100"
                >
                 Blockchain Technology
                </button>
              </div>
              <div className="htmlForm-control  mt-3 d-flex align-items-center justify-content-center">
                <button
                  aria-controls="1-collapse-text"
                  type="button"
                  className="btns apply-btn course-btn w-100"
                >
               Cloud Computing 
                </button>
              </div>
              <hr className="my-2" />
              <button type="submit" className="btns btn-login mt-4 fs-6">
                Save & Next
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesRegistration;
