import React from "react";
import { useNavigate,Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
  
    navigate('/dashboard');
    
  };

  return (
    <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
      <div className="  w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
        <div className="col-xl-4  col-xxl-3  col-lg-5 col-sm-12 col-md-6 login-row p-3 ">
          <div className="w-100  d-flex align-items-center justify-content-center flex-column">
            <img
              width="300"
              src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
              className="img-fluid"
              alt=""
              decoding="async"
            />
            <h1 className="h5 h-md-4 font-weight-bold text-center mt-0">
              Welcome Back!
            </h1>
            <p className="text-center">Sign in to continue to Itsolera | LMS.</p>
            <div className="w-100">

            
        
            <form className="mt-3" >
              <div className="htmlForm-group">
                <label className="text-gray-700 font-weight-bold ms-1 ">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className=" mt-1  text-gray-700 font-weight-normal login-input"
                  autoFocus
                  autoComplete="on"
                  required
                 
                />
              </div>

              <div className="htmlForm-group mt-4">
                <label className="text-gray-700 font-weight-bold ms-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className=" mt-1   text-gray-700 font-weight-normal login-input"
                  required
                />
              </div>

              <div className="checkbox mt-4  htmlForm-group w-100 d-flex align-items-center justify-content-between  gap-5">
                <div className="htmlForm-check ms-lg-3  ms-sm-0">
                  <input
                    className="htmlForm-check-input "
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="htmlForm-check-label ms-2 " htmlFor="">
                    Remember me
                  </label>
                </div>
                <a href="" className="text-decoration-none me-lg-3 me-sm-0">Forgot Password</a>
              </div>

               <button type="button" className="btns btn-login mt-4 "  onClick={handleLogin}>
                Log In
              </button>
            </form>
            <hr className="my-4" />
            </div>

           

            <p className="mt-2 text-sm text-center">
              Need an account? 
              <a href="#" className="text-color font-weight-semibold text-decoration-none ms-1" > 
               <Link to="/Registration">Register</Link> 
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
