import React, { useState } from 'react'
import Register from '../LoginRegistarationComponents/Register'
import Head from '../LoginRegistarationComponents/Head'
import Navbar from '../LoginRegistarationComponents/Navbar'
import Profile from '../LoginRegistarationComponents/Profile'
import CoursesRegistation from '../LoginRegistarationComponents/CoursesRegistration'

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