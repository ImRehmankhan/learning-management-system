import React, { useContext, useState } from "react";
import Register from "../LoginRegistarationComponents/Register";
import Head from "../LoginRegistarationComponents/Head";
import Navbar from "../LoginRegistarationComponents/Navbar";
import Profile from "../LoginRegistarationComponents/Profile";
import { MyContext } from "../ContextApi/Context";

function RegistrationPage() {

  const { pageName } = useContext(MyContext);
  return (
    <>
      <Head />
      <Navbar />
      {pageName === "0" ? <Register /> : <Profile />}
    </>
  );
}

export default RegistrationPage;
