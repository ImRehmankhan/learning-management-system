import React from "react";
import Navbar from "../CoursesComponents/Navbar";
import CoursesRegistration from "../CoursesComponents/CoursesRegistration";
import Footer from "../LoginRegistarationComponents/Footer";
import { Outlet } from 'react-router-dom';

function CoursesPage() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer/>
       
      
    </>
  );
}

export default CoursesPage;
