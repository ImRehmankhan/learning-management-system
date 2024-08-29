import React from 'react'
import {categoryData} from './CourseList'
function CourseCatagory() {
  return (
    <section>
    <div className="container">
      {/* Title */}
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h2>Choose a Category</h2>
          <p className="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
        </div>
      </div>

      <div className="row g-4 marginonsmallscree">
      {categoryData.map((e, index) => (
                    <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="card card-body bg-success bg-opacity-10 text-center position-relative btn-transition p-4">
                      <div className="icon-xl bg-body mx-auto rounded-circle mb-3">
                        <img src={e.image} alt="" />
                      </div>
                      <h5 className="mb-2">
                        <a  className="stretched-link">
                          {e.title}
                        </a>
                      </h5>
                      <h6 className="mb-0">{e.courseCount} Courses</h6>
                    </div>
                  </div>
      ))}










      </div>
    </div>
  </section>
  )
}

export default CourseCatagory