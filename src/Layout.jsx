import React from "react";
import {Outlet} from "react-router-dom";
import NavX from "./NavX";

const Layout = () => {
  return (
    <>
         <NavX/>
        <Outlet/>
    </>
  );
};

export default Layout;