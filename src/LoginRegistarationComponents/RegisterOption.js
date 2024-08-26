import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {MyContext} from '../ContextApi/Context'
function RegisterOption() {
    const{changePageHandeler}= useContext(MyContext)
    const [SelectedRadio , setSelectedRadio]=useState("")
    const SelectedTab=(e)=>{
        setSelectedRadio(e)
    }
    const navigate = useNavigate();
  return (
<div class="container  ">
  <div class="row justify-content-center   ">
    <div class="col-md-8 col-lg-10 col-xl-12  d-flex align-items-center justify-content-center">
      <div class="card mt-5 mb-5 w-md-50 w-sm-100 ">
        <div class="text-center  card-body  ">
          <h2 class="display-4 mt-4 fs-1 fw-bold pb-2 mb-5">
            Join as a Teacher or Student
          </h2>
          <fieldset>
            <div class="row justify-content-center">
              <div class="col-12 col-md-5 mb-4 ">
                <div class="card h-100 register-option-bar-border-hover" onClick={()=>SelectedTab("Teacher")}>
                  <div class="card-body text-center">
                    <input
                      type="radio"
                      id="client-radio"
                      name="user-type"
                      value="Teacher"
                      class="form-check-input"
                    />
                    <label for="client-radio" class="form-check-label">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"
                        />
                        <path
                          d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"
                        />
                        <line
                          x1="10.65"
                          x2="21"
                          y1="17.29"
                          y2="17.29"
                        />
                        <circle
                          cx="10.04"
                          cy="5.73"
                          r="2.73"
                        />
                        <path
                          d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"
                        />
                      </svg>
                      <h4 class="mt-3">I’m a Teacher</h4>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 mb-4  ">
                <div class="card h-100  register-option-bar-border-hover" onClick={()=>SelectedTab("Student")}>
                  <div class="card-body text-center">
                    <input
                      type="radio"
                      id="freelancer-radio"
                      name="user-type"
                      value="Student"
                      class="form-check-input"
                    />
                    <label for="freelancer-radio" class="form-check-label">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 24 24"
                      >
                        <polygon
                          fill="none"
                          stroke="#001e00"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          points="19.38 21 8.38 21 10 14 21 14 19.38 21"
                        />
                        <circle
                          cx="14.69"
                          cy="17.5"
                          r=".5"
                        />
                        <line
                          x1="9.43"
                          x2="5.99"
                          y1="21"
                          y2="21"
                        />
                        <circle
                          cx="10.04"
                          cy="5.73"
                          r="2.73"
                        />
                        <path
                          d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"
                        />
                      </svg>
                      <h4 class="mt-3">I’m a Student</h4>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <button
            type="button"
            class="btns btn-login px-5 btn-lg mt-5"
            onClick={()=>changePageHandeler("1")}
          >
            Join as a { SelectedRadio}
          </button>
          <p class="text-center mt-4 mb-5" onClick={()=>navigate('/')}>
            Already have an account?
            <a href="" class="text-primary ms-1"  >
              LogIn Here
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default RegisterOption