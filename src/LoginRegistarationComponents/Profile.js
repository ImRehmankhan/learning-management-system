import React from 'react'

function Profile({changeFormHandeler}) {
  return (
    <section className="d-flex login-page flex-column flex-md-row p-3 align-items-center justify-content-center">
    <div className="  w-100 w-md-50 w-lg-25 rounded-lg min-vh-95 px-3 d-flex align-items-center justify-content-center">
      <div className="col-xl-4  col-xxl-3  col-lg-5 col-sm-12 col-md-6 login-row p-3 ">
        <div className="w-100  d-flex align-items-center justify-content-center flex-column">
          <h1 className="h5 h-md-4 font-weight-bold text-center mt-0">
          Profile Registration
          </h1>
        
        
          <div className="w-100">

          
      
          <form className="mt-3" action="#" method="POST">
          <div className="htmlForm-group">
              <label className="text-gray-700 font-weight-normal ms-1 ">CNIC</label>
              <input
                type="text"
                placeholder="Enter Your CNIC"
                className=" mt-1  text-gray-700 font-weight-normal login-input"
                autoFocus
                autoComplete="on"
                required
               
              />
            </div>
            <div className="htmlForm-group mt-4">
              <label className="text-gray-700 font-weight-normal ms-1 ">Qualification</label>
              <input
                type="text"
                placeholder="Enter Qualification"
                className=" mt-1  text-gray-700 font-weight-normal login-input"
              
                autoComplete="on"
                required
               
              />
            </div>
            <div className="htmlForm-group mt-4">
              <label className="text-gray-700 font-weight-normal ms-1 ">Whatsapp Number</label>
              <input
                type="text"
                placeholder="Enter Whatsapp Number"
                className=" mt-1  text-gray-700 font-weight-normal login-input"
             
                autoComplete="on"
                required
               
              />
            </div>
            
            <div className="htmlForm-group mt-4">
              <label className="text-gray-700 font-weight-normal ms-1">City</label>
              <input
                type="text"
                placeholder="Enter city"
                minLength="6"
                className=" mt-1   text-gray-700 font-weight-normal login-input"
                required
              />
            </div>
            <div className="htmlForm-group mt-4">
              <label className="text-gray-700 font-weight-normal ms-1">Address</label>
              <input
                type="text"
                placeholder="Enter Your Address"
                minLength="6"
                className=" mt-1   text-gray-700 font-weight-normal login-input"
                required
              />
            </div>

    

            <button type="submit" className="btns btn-login mt-4 fs-6" onClick={()=>changeFormHandeler("2")}>
           Save & Next
            </button>
          </form>
          <hr className="my-4" />
          </div>

         

          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Profile