import React from "react";
import {course} from './CourseList'
import {  useNavigate } from "react-router-dom";
function CourseCard() {
  const navigate = useNavigate();
  const handlepayment = () => {
  
    navigate('/Payment');
    
  };
  return (
    <>
      {course.map((e, index) => (
        <div class="card col-lg-3 col-sm-12 col-md-5  mx-3 " >
          <div class=" w-100 ">
            <img
              src={e.post_url}
              class="card-img-top "
              alt="..."
              
            />
          </div>

          <div class="card-body">
            <h6 class="card-title fs-6">{e.course_name}</h6>
            <p class="card-text">{`$/${e.price}`}</p> 
          <a href="" class="apply-btn btns btn-applyforcourses"  onClick={handlepayment}> 
              Enroll Now
            </a>
          
          </div>
        </div>
      ))}
    </>
  );
}
export default CourseCard;
