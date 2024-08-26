import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
import {MyContext} from '././ContextApi/Context'
import { useState } from "react";


import Login from "./LoginRegistarationComponents/Login";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentDashboardPage from "./Pages/StudentDashboardPage";
import CoursesPage from "./Pages/CoursesPage";
import PaymentPage from './Pages/paymentPage'
import PageNotFound from "./LoginRegistarationComponents/PageNotFound";
import ShowProfileDetails from "./UserProfile/ShowProfileDetails";
import CoursesRegistration from "./CoursesComponents/CoursesRegistration";
import PaymentForm from "./CoursesComponents/PaymentForm";
import MyCourses from "./StudentDashboardComponents/MyCourses";



function App() {
  const [pageName, setPageName] = useState("0");
  const changePageHandeler = (e) => {
    setPageName(e);
  };
  return (
    <>
   < MyContext.Provider value={ {pageName, changePageHandeler}}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/Courses" element={ <CoursesPage/>} >
             <Route index element={ <CoursesRegistration />} />
             <Route path="payment" element={ <PaymentForm/>} />

          </Route>



          <Route path="/Mycourses" element={ <MyCourses/>} />
          
          <Route path="/Payment" element={ <PaymentPage/>} />
          <Route path="/Profile" element={ <ShowProfileDetails/>} />
           <Route path="/*" element={ <PageNotFound/>} />
        </Routes>
      </Router>

      </MyContext.Provider>

      
      

    </>
  );
}

export default App;
