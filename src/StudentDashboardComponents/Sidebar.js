import React from 'react'

function Sidebar() {
  return (
    <>
      <div className="sidebar" data-background-color="light">
        <div className="sidebar-logo">
          
          <div className="logo-header" data-background-color="dark">
            <a href="#" className="logo">
              <img
                src="https://itsolera.com/wp-content/uploads/2024/05/IT-Solera-LOGO.png"
                alt="navbar brand"
                className="navbar-brand"
               width="200"
              />
            </a>
            <div className="nav-toggle ">
              <button className="btn btn-toggle toggle-sidebar ">
                <i className="gg-menu-right text"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more ">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
        
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <a href="#"><i className="fas fa-home"></i><p>Dashboard</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-calendar"></i><p>Calendar</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas  fa-bullhorn"></i><p>Latest News</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas  fa-chalkboard-teacher"></i><p>How To Use LMS</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fab fa-whatsapp fs-4"></i><p>Apply For Whatsapp</p></a>
              </li>
              <li className="nav-item " >
                <a href="#"><p className='fw-bold'>Class Activity</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-video "></i><p>Pre Recorded</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-video "></i><p>Zoom Sessions</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-pencil-alt "></i><p>Week Quiz</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-clipboard-list "></i><p>Assignments</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-briefcase "></i><p>Projects</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas  fa-chart-line "></i><p>Results</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-graduation-cap "></i><p>Certificate</p></a>
              </li>
              <li className="nav-item ">
                <a href="#"><i className="fas fa-comments"></i><p>Itsolera Comunity</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar