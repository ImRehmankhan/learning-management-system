import React, { useState } from 'react'
import Register from '../Register'
import Head from '../Head'
import Navbar from '../Navbar'
import Profile from '../Profile'
import CoursesRegistation from '../CoursesRegistration'

function RegistrationPage() {
  
  const [pageName, setPageName]=useState("0")


  const changeFormHandeler=(e)=>{
    setPageName(e)
  }
      
  return (
    <>
    <Head/>
    <Navbar/>
    {
      pageName === "0" ? (
        <Register changeFormHandeler={changeFormHandeler} />
      ) : pageName === "1" ? (
        <Profile changeFormHandeler={changeFormHandeler} />
      ) : (
        <CoursesRegistation changeFormHandeler={changeFormHandeler}/>
      )
    }
    </>
  )
}

export default RegistrationPage