import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyContext } from "././ContextApi/Context";
import { useState } from "react";

import Login from "./LoginRegistarationComponents/Login";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentDashboardPage from "./Pages/StudentDashboardPage";
import CoursesPage from "./Pages/CoursesPage";
import PageNotFound from "./LoginRegistarationComponents/PageNotFound";
import ShowProfileDetails from "./UserProfile/ShowProfileDetails";
import CoursesRegistration from "./CoursesComponents/CoursesRegistration";
import Invoice from "./CoursesComponents/Invoice";
import MyCourses from "./CoursesComponents/MyCourses";
import CourseCatagory from "./CoursesComponents/CourseCatagory";
import RegisterOption from "./LoginRegistarationComponents/RegisterOption";
import Register from "./LoginRegistarationComponents/Register";
import Profile from "./LoginRegistarationComponents/Profile";
import ChallanDetails from "./CoursesComponents/ChallanDetails";
import HomeDashboard from "./StudentDashboardComponents/HomeDashboard";
import Videos from "./StudentDashboardComponents/Videos";
import Quiz from "./StudentDashboardComponents/Quiz";
import Assignments from "./StudentDashboardComponents/Assignments";
import Results from "./StudentDashboardComponents/Results";
import Certification from './StudentDashboardComponents/Certification'
import ZoomSession from "./StudentDashboardComponents/ZoomSession";
import Projects from "./StudentDashboardComponents/Projects";
import Comunity from "./StudentDashboardComponents/Comunity";


function App() {
  const [courseCount, setCourseCount] = useState(0);
  const updateCourseCount = (e) => {
    setCourseCount(e);
  };
  const [Courses, setCourses] = useState([]);
  const addCourses = (e) => {
    setCourses([...Courses, e]);
  };

  return (
    <>
      <MyContext.Provider
        value={{ Courses, addCourses, courseCount, updateCourseCount }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/Registration" element={<RegistrationPage />}>
              <Route index element={<RegisterOption />} />
              <Route path="Register" element={<Register />} />
              <Route path="Register/Profile" element={<Profile />} />
            </Route>

            <Route path="/Courses/" element={<CoursesPage />}>
              <Route index element={<CoursesRegistration />} />
              <Route path="Userprofile" element={<ShowProfileDetails />} />
              <Route path="CourseCatagory" element={<CourseCatagory />} />
              <Route path="Mycourses" element={<MyCourses />} />
              <Route path="Invoice" element={<Invoice />} />
              <Route path="ChallanDetails" element={<ChallanDetails />} />
            </Route>

            <Route path="/dashboard" element={<StudentDashboardPage />}>
              <Route index element={<HomeDashboard/>} />
              <Route path="Videos" element={<Videos/>} />
              <Route path="ZoomSession" element={<ZoomSession/>} />
              <Route path="Quiz" element={<Quiz/>} />
              <Route path="Assignments" element={<Assignments/>}/>
              <Route path="Projects" element={<Projects/>}/>
              <Route path="Results" element={<Results/>}/>
              <Route path="Certification" element={<Certification/>}/>
              <Route path="Comunity" element={<Comunity/>}/>




            </Route>

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
