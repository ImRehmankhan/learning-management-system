import React from 'react'

function Navbar() {
  return (
    
    <nav class="navbar navbar-registration navbar-expand-lg navbar-dark bg-light " aria-label="Ninth navbar example">
    <div class="container-xl  ">
    <img width="150" src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png" class="attachment-large size-large wp-image-238" alt="" decoding="async"/>
      <button class="navbar-toggler top-bar2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ms-5 " id="navbarsExample07XL">
        <ul class="navbar-nav me-auto mb-2  mb-lg-0">
          <li class="nav-item">
            <a class="nav-link  nav-text-color  fs-5"    aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  nav-text-color fs-5" href="" >About</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link   nav-text-color fs-5" href="" tabindex="-1" aria-disabled="true">Info Desk</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle  nav-text-color fs-5"   id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown07XL">
              <li><a class="dropdown-item nav-text-color"  >Online Courses</a></li>
              <li><a class="dropdown-item nav-text-color"  >Onsite Courses</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle  nav-text-color fs-5"   id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Opportunities</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown07XL">
              <li><a class="dropdown-item nav-text-color"  >Scholarships</a></li>
              <li><a class="dropdown-item nav-text-color"  >Internships</a></li>
           
            </ul>
          </li>
           <li class="nav-item ">
            <a class="nav-link   nav-text-color fs-5"   tabindex="-1" aria-disabled="true">Events</a>
          </li>
        </ul>
        <button class="apply-btn btns">Enroll Now</button>
      </div>
    </div>
  </nav>



 
  
  )
}

export default Navbar