import React from "react";

import Sidebar from "../StudentDashboardComponents/Sidebar"
import Snavbar from "../StudentDashboardComponents/Snavbar"
import Footer from "../StudentDashboardComponents/Footer";


export default function StudentDashboardPage() {

  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <Snavbar/>
      
      </div> 
    </>
  );
}
