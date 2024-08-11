import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import { useState } from "react";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import { MyContext } from "./ContextApi/Context";
function App() {
  const [pageName, setPageName]=useState("Login")


  const changePageHandeler=(e)=>{
    setPageName(e)
  }
  return (
    <>
    
    <MyContext.Provider value={{ changePageHandeler,pageName }}>
    {pageName == "Login"? 
         <Login  />:
         <RegistrationPage/>
        
        }
    </MyContext.Provider>
       
    
     {/*  <Head />
      <Navbar /> */}
    {/*   <Login /> */}
     {/*  <Register /> */}
      {/* <Profile/> */}
     {/*  <CoursesRegistration/> */}
      
    </>
  );
}

export default App;
