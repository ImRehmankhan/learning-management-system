import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import {MyContext} from '../ContextApi/Context'
import HeaderBanner from '../UserProfile/HeaderBanner'
function Register({changeFormHandeler}) {
  const{changePageHandeler}= useContext(MyContext)
  const navigate = useNavigate();
  const movetologin = () => {
    navigate('/');
  };
  return (
    <>
    <HeaderBanner value={" Registration"}/>
    <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
      <div className="  w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
        <div className="col-xl-4  col-xxl-3  col-lg-5 col-sm-12 col-md-6 login-row p-3 ">
          <div className="w-100  d-flex align-items-center justify-content-center flex-column">
            <h1 className="h5 h-md-4 font-weight-bold text-center mt-0 fs-5">
            Registration
            </h1>
          
            <div className="w-100">

            
        
            <form className="mt-3" action="#" method="POST">
            <div className="htmlForm-group">
                <label className="text-gray-700 font-weight-normal ms-1 ">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className=" mt-1  text-gray-700 font-weight-normal login-input"
                  autoFocus
                  autoComplete="on"
                  required
                 
                />
              </div>
              <div className="htmlForm-group mt-4">
                <label className="text-gray-700 font-weight-normal ms-1 ">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className=" mt-1  text-gray-700 font-weight-normal login-input"
               
                  autoComplete="on"
                  required
                 
                />
              </div>
              <div className="htmlForm-group mt-4">
                <label className="text-gray-700 font-weight-normal ms-1 ">Mobile</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className=" mt-1  text-gray-700 font-weight-normal login-input"
                
                  autoComplete="on"
                  required
                 
                />
              </div>
              
              <div className="htmlForm-group mt-4">
                <label className="text-gray-700 font-weight-normal ms-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className=" mt-1   text-gray-700 font-weight-normal login-input"
                  required
                />
              </div>
              <div className="htmlForm-group mt-4">
                <label className="text-gray-700 font-weight-normal ms-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className=" mt-1   text-gray-700 font-weight-normal login-input"
                  required
                />
              </div>

      

              <button type="submit" className="btns btn-login mt-4 fs-5" onClick={()=>changePageHandeler("2")}>
             
              Save & Next
              </button>
            </form>
            <hr className="my-4" />
            </div>

           

            <p className="mt-2 text-sm text-center">
            Already have an account?
              <a href="" className="text-color font-weight-semibold text-decoration-none ms-1"onClick={movetologin} >
              Login Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register