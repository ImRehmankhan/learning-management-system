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
          <Route path="/Courses" element={ <CoursesPage/>} />
          <Route path="/Payment" element={ <PaymentPage/>} />
          <Route path="/*" element={ <PageNotFound/>} />
        </Routes>
      </Router>

      </MyContext.Provider>

    </>
  );
}

export default App;
